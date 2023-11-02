<script setup>

import {  useCounterStore } from '~/store'
const user = useCounterStore()
const count = user.count

const signOut = async () => {
    await signOutUser();
    state()
    console.log('signout');
    user.decrement()
    // email = ''
    // return navigateTo('/')
};
const cancelSignOut = () =>{
    !signOut()
    alert('cancel')
    console.log('cancel');
}

</script>

<template>

 
    <div class="bg-gray-100 h-screen flex items-center justify-center">

        <div class="bg-white p-4 md:p-8 rounded-lg shadow-md max-w-md w-full">
            <h1 class="text-3xl font-semibold mb-4">Confirm Sign Out</h1>
            <p class="text-gray-700 mb-4">Are you sure you want to sign out of your account?</p>
            <div class="flex justify-between">
                <button class="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none"  @click="signOut">Sign Out</button>
                <button class="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 focus:outline-none"  @click="cancelSignOut()">Cancel</button>
            </div>
        </div>
    </div>


</template>