<script setup lang="ts">


import { useCounterStore } from "~/store";
const user = useCounterStore();
const isLoggedIn = computed(() => user.count)
const email = ref(user.name);
const { loginUser } = loginFirebase();
const creds = reactive({
  email: "",
  password: "",
});

const auth = reactive({
  email: "",
  noAccount: true,
  msg: "",
});
async function handleRegistration() {
  const response = await loginUser(creds.email, creds.password);
  state()

  
  if(response){
    user.increment();
    user.name = creds.email;
    console.log(creds.email);
    return navigateTo('/posts')
  }
    console.log("please try again");
    auth.noAccount = false;
    auth.msg = `You don't have an account`;
    (creds.email = ""), (creds.password = "");
  

}


</script>

<template>
  <!-- <h1>{{ email }}</h1>
  <h1>{{ isLoggedIn }}</h1> -->
  <!-- <button @click="c">change</button> -->
  <div>
  

    <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  {{$t('Login')}}
              </h1>
              <form v-if="auth.noAccount" class="space-y-4 md:space-y-6"  @submit.prevent="handleRegistration">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ $t('Email') }}</label>
                      <input type="email" v-model="creds.email"  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" >
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{$t('Password')}}</label>
                      <input type="password" v-model="creds.password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                        
                         
                      </div>
                    
                  </div>
                  <button type="submit" class="w-full text-white border bg-sky-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ">{{$t('Login')}}</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                       <NuxtLink class="font-medium text-primary-600 hover:underline text-blue-500 dark:text-primary-500"
        to="/signup"
        
      >
      {{$t('Account')}}</NuxtLink>
                  </p>
              </form>
              <form   v-else="auth.noAccount == false" class="space-y-4 md:space-y-6"  @submit.prevent="handleRegistration">
                  <div>
                      <h1 class="block mb-2 text-bg font-medium text-red-900  dark:text-white"> You don't have account</h1>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> {{$t('Email')}}</label>
                      <input type="email" v-model="creds.email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" >
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{$t('Password')}}</label>
                      <input type="password" v-model="creds.password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                        
                         
                      </div>
                    
                  </div>
                  <button type="submit" class="w-full text-white border bg-sky-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ">{{$t('Login')}}</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                    <NuxtLink class="font-medium text-primary-600 hover:underline text-blue-500 dark:text-primary-500"
        to="/signup"
        
      >
      {{$t('Account')}}</NuxtLink>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    <!-- <h1>{{ email }}</h1> -->
  </div>
</template>

<style lang="scss" scoped></style>
