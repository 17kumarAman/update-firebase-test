// import {useCounterStore} from '~/store/index'



// export default defineNuxtRouteMiddleware((route, redirect) => {
  
//   const user = useCounterStore();
//   const isLoggedIn = computed(()=>{user.count})

  
//   const authenticatedRoutes = ['Home', 'about', 'posts'];

  
//   if (!isLoggedIn && authenticatedRoutes.includes(route.path)) {
//     return redirect.fullPath == ('/login'); // Redirect to your login page
//   }
// })


import {useCounterStore} from '~/store/index'
export default defineNuxtRouteMiddleware((to, from) => {
    const user = useCounterStore()
     
    

    
    
    const isLoggedIn = user.count

    // console.log(!isLoggedIn);
   if(isLoggedIn !== true){
        // alert ('please login first')
        return abortNavigation(to.path) 
        
    }
  })