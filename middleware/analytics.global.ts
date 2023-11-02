// import { FacebookAuthProvider } from "firebase/auth";
// import { useCounterStore } from "~/store/index";
// export default defineNuxtRouteMiddleware((to, from) => {
//   const user = useCounterStore();
//   const isLoggedIn = user.count;
//   if (isLoggedIn == true) {
//     if (to.path == "/login" || to.path == "/signup") {
//       return navigateTo(from.path, { redirectCode: 301 });
//     }
//   } else {
//     if (to.path == "/signout") {
//       // alert('gvj')
//       return navigateTo(to.path, { redirectCode: 301 });
//     }
//   }
// });

// export default defineNuxtRouteMiddleware((to, from) => {
  
//   const user = useCounterStore();
//   const isLoggedIn = user.count;
//   // if (!isLoggedIn === false) {
//   //   return navigateTo('/login')
//   // }
// })



import {useCounterStore} from '~/store/index'
export default defineNuxtRouteMiddleware((to, from) => {
    const user = useCounterStore()
 
    
    const isLoggedIn = user.count
 
    if(isLoggedIn == true){
      
        if (to.path == '/login' || to.path == '/signup') {
           
            return navigateTo(from.path, { redirectCode: 301 })
        }

    }  else {
      
        if (to.path == '/signout' ) {
            // console.clear();
            return navigateTo(to.path, { redirectCode: 301 })
            
        }

    }
    
  })