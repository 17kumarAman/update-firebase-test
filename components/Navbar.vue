<template>
  <div>
    <nav class=" bg-slate-100 shadow-2xl">
      <div class="px-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div v-if="isLoggedIn =false" class="mt-4 sm:ml-6 sm:flex sm:items-center">
            <NuxtLink
              to="/"
              class="px-3 py-2 rounded-md text-sm font-medium hover:bg-cyan-700 focus:outline-none"
              >{{$t("Home")}}</NuxtLink
            >
            <!-- <NuxtLink
              to="/about"
              class="px-3 py-2 rounded-md text-sm font-medium hover:bg-cyan-700 focus:outline-none"
              >{{$t("About")}}</NuxtLink
            >
            <NuxtLink
              to="/posts"
              class="px-3 py-2 rounded-md text-sm font-medium hover:bg-cyan-700 focus:outline-none"
              >{{$t("Posts")}}</NuxtLink -->
            >
            <NuxtLink v-if="isLoggedIn"
              to="/signout"
              class="px-3 py-2 rounded-md text-sm font-medium hover:bg-cyan-700 focus:outline-none"
              >{{$t("Signout")}}</NuxtLink
            >
            <NuxtLink v-else
              to="/login"
              class="px-3 py-2 rounded-md text-sm font-medium hover:bg-cyan-700 focus:outline-none"
              >{{$t("Login")}}</NuxtLink
            >
            


          
             
            
            
          </div>
          <div v-else class="mt-4 sm:ml-6 sm:flex sm:items-center">
            <NuxtLink
              to="/"
              class="px-3 py-2 rounded-md text-sm font-medium hover:bg-cyan-700 focus:outline-none"
              >{{$t("Home")}}</NuxtLink
            >
            <NuxtLink
              to="/about"
              class="px-3 py-2 rounded-md text-sm font-medium hover:bg-cyan-700 focus:outline-none"
              >{{$t("About")}}</NuxtLink
            >
            <NuxtLink
              to="/posts"
              class="px-3 py-2 rounded-md text-sm font-medium hover:bg-cyan-700 focus:outline-none"
              >{{$t("Posts")}}</NuxtLink
            >
            <NuxtLink v-if="isLoggedIn"
              to="/signout"
              class="px-3 py-2 rounded-md text-sm font-medium hover:bg-cyan-700 focus:outline-none"
              >{{$t("Signout")}}</NuxtLink
            >
            <NuxtLink v-else
              to="/login"
              class="px-3 py-2 rounded-md text-sm font-medium hover:bg-cyan-700 focus:outline-none"
              >{{$t("Login")}}</NuxtLink
            >
            


          
             
            
            
          </div>
          <button @click="langChange" class="px-3 py-2 rounded-md text-sm font-medium  focus:outline-none">{{ lang }}</button>
        </div>
      </div>
    </nav>
    <hr class="border-2 shadow-2xl" />
  </div>
</template>

<script setup>
import {  useCounterStore } from '../store/index'
const user = useCounterStore()
console.log(user.count);
const isLoggedIn = computed(() => user.count)
console.log(isLoggedIn.value , 'hello');
const { locale } = useI18n()
const lang = ref('en')
function langChange(){
  lang.value = lang.value === 'en'? 'हिंदी' :'en'
  locale.value = lang.value
  console.log(locale.value);
}

</script>
