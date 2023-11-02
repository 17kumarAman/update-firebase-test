// import {useCounterStore} from '~/store/index'
// export default defineNuxtRouteMiddleware((to,from)=>{

//     const users = useCounterStore();
//     const isLoggedIn = users.count;
//    if(isLoggedIn === true){
//     if(to.path === '/login' || to.path=== '/signup'){
//         return abortNavigation()
//     }
//    }else if( isLoggedIn === false){
//     if(to.path === 'signout'){
//         return abortNavigation()
//     }
//    }
    
   
// })