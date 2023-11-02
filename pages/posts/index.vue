<script setup >
definePageMeta({
  middleware:'auth'
})

import { useUserStore } from '~~/store/index'

const userStore = useUserStore()
await userStore.fetchUsers()
const api = userStore.getUsers
const currentPage = ref(0)
const setter = computed(() => console.log(api))
const data = computed(() => ((api.length > 0 ? (api.slice(currentPage.value * 8, currentPage.value * 8 + 8)) : 'end')))
const totalPage = (Math.ceil(api.length / 8) - 1)

function nextPage() {
  if (currentPage.value >= Math.ceil(api.length / 8) - 1) {
    currentPage.value = Math.ceil(api.length / 8) - 1
    console.log((api.length / 8) - 1);
  }
  else
    currentPage.value++
}

function previousPage() {
  if (currentPage.value <= 0) {
    currentPage.value = 0
    // console.log((s.value.length/10)-1);
    console.log(currentPage.value);
  }
  else
    currentPage.value--
}

</script>

<template>
 <div class="grid md:grid-cols-4 sm:grid-cols-1 justify-items-center  ">
            <div v-for="e in data">
              
                

                <Data :title = 'e.title' :id="e.id" :body="e.body"/>
            
            
            </div>
            
        </div>
    <hr>
    <footer class=" mx-auto text-center  ">
      <h1 class="text-2xl ">{{$t('Page')}}{{ currentPage + 1 }} {{$t('of')}} {{ totalPage + 1 }}</h1>
      <button @click="previousPage" class="ml-3 font-bold text-xl w-40 rounded-xl bg-slate-500 h-8 float-left">{{$t('Prev')}}</button>
      <button @click="nextPage" class=" mr-3 font-bold text-xl w-40 rounded-xl bg-slate-500 h-8 float-right "> {{$t('Next')}}</button>
    </footer>
  
</template>

<style lang="scss" scoped></style>
