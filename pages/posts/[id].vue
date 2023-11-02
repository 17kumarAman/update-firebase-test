<script setup >
definePageMeta({
  middleware: 'auth'
    
});
// import { useRoute } from 'vue-router';
const {id} = useRoute().params
// const num = 1
console.log(id);
const data = await $fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
console.log(data);
</script>

<!-- <template>
   <div > 
      <p class="text-center text-6xl capitalize mt-4 font-bold shadow-sm ">product details for element {{ id }}</p>
      <h1 class="text-3xl pl-7">{{ data.title }}</h1>
      <p>{{ data.body }}</p>
   </div>
   

</template> -->
<template>
   <div  class="grid sm:grid-cols-3 gap-7 justify-items-center m-10">
       <div class="bg-white rounded-lg shadow-md overflow-hidden">
           <img :src="`/image.webp/`" alt="Placeholder Image" class="h-52 w-auto object-cover" />
           
       </div>
       <div class="sm:col-span-2 mx-6">
           <h1 class="font-bold text-2xl mb-5">{{data.title}}</h1>
           <h3 class="font-semibold text-lg mb-5">Release Date: {{data.title}}</h3>
           <p class="text-gray-500 text-md mb-8">{{data.body}}</p>
           <!-- <p class="text-gray-500 text-md">Revenue: $ {{revenue}}</p> -->
       
       </div>
   </div>
  
</template>