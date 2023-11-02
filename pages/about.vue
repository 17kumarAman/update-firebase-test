<script setup lang="ts">
definePageMeta({
  middleware:'auth'
})

</script>

<template>

<div class="bg-gray-100">

    
    <section class="container mx-auto p-4 md:p-8">
        <div class="bg-white p-4 md:p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-semibold mb-4">Our Story</h2>
            <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget justo nec orci tincidunt ullamcorper. Sed vel ipsum neque. Vestibulum id viverra ipsum. Vivamus quis bibendum odio, non fermentum est. Fusce tempus neque a nunc blandit, in sollicitudin enim suscipit.</p>
        </div>
    </section>

    <section class="container mx-auto p-4 md:p-8 mt-4">
        <div class="bg-white p-4 md:p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-semibold mb-4">Our Team</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div class="bg-gray-200 p-4 rounded-lg">
                    <h3 class="text-xl font-semibold">John Doe</h3>
                    <p class="text-gray-700">CEO</p>
                </div>
                <div class="bg-gray-200 p-4 rounded-lg">
                    <h3 class="text-xl font-semibold">Jane Smith</h3>
                    <p class="text-gray-700">COO</p>
                </div>
                <div class="bg-gray-200 p-4 rounded-lg">
                    <h3 class="text-xl font-semibold">Mike Johnson</h3>
                    <p class="text-gray-700">CTO</p>
                </div>
            </div>
        </div>
    </section>

    <section class="container mx-auto p-4 md:p-8 mt-4">
        <div class="bg-white p-4 md:p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-semibold mb-4">Our Services</h2>
            <ul class="list-disc text-gray-700 ml-6">
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
            </ul>
        </div>
    </section>
    
    <section class="container mx-auto p-4 md:p-8 mt-4">
        <div class="bg-white p-4 md:p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-semibold mb-4">Contact Us</h2>
            <p class="text-gray-700">Feel free to reach out to us at contact@example.com or call us at +1-123-456-7890.</p>
        </div>
    </section>

</div>
</template>

<style lang="scss" scoped>

</style>