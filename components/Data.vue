<script setup>
const props = defineProps(["title", "body", "id"]);
</script>


<template>
  <div class="bg-gray-50 rounded-lg text-left shadow-md overflow-hidden m-4 px-2 h-56 ">
    <div class="p-1 pb-5">
       <p class=" text-gray-500 text-sm mb-2 text-center">{{ id }}</p>
      <h3 class=" capitalize font-semibold text-lg mt-2 text-left">
        {{title ? title.length > 12 ? title.slice(0, 24) + "..." : title + "..." : null}}
      </h3>
      <p class="text-black capitalize text-sm mb-2">
        {{ body ? body.length > 17 ? body.slice(0, 110) + "..." : body + "..." : null }}
      </p>
    </div>
    
    <NuxtLink :to="`posts/${id}`" class="text-blue-500">Read More...</NuxtLink>
  </div>
</template>
