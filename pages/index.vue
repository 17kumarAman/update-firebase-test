<template>
    
    <!-- <h1>Welcome {{ email }}</h1>  -->
    <div class="py-20 h-[700px]" style="background: linear-gradient(90deg, #667eea 0%, #764ba2 100%)"
    >
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold mb-2 text-white">
          Smart Health Monitoring Wristwatch!
        </h2>
        <h3 class="text-2xl mb-8 text-gray-200">
          Monitor your health vitals smartly anywhere you go.
        </h3>

        <NuxtLink to="/login"><button class="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
          {{ $t('Start') }}
        </button></NuxtLink>
        <button @click="fu" class="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
          auth
        </button>
      </div>
    </div>






    

</template>
<script setup>


const { locale } = useI18n()

import { useCounterStore } from '~/store';
const user = useCounterStore()
const email = ref(user.name)

console.log('email', email.value);

const fu = async () => {
  await authenticated()
}

</script>



 