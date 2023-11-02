// import { getAuth, onAuthStateChanged } from "firebase/auth";

// const auth = getAuth();


// export const authenticated = async()=>{
    
//     try {
//         const user = await new Promise((resolve, reject) => {
//             onAuthStateChanged(auth, (user) => {
//                 if (user) {
//                     resolve(user);
//                 } else {
//                     reject(new Error("User is not authenticated."));
//                 }
//             });
//         });
        
//         if (user) {
//             const uid = user.uid;
//             console.log('hello');
//         }
//     } catch (error) {
//         // Handle the error
//         console.error("Authentication error:", error.message);
//     }
// }
    


// // export const signOutUser = async () => {
// //     const auth = getAuth();
// //     const result = await auth.signOut();
// //     return result;
// // };
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {  useCounterStore } from '../store/index'
const isLoggedIn = useCounterStore()
console.log(isLoggedIn.count);
const proved = computed(()=> isLoggedIn.count)
console.log(proved , 'hello')
const auth = getAuth();
export function state(){
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            isLoggedIn.increment()
            alert('Login')
            console.log(proved.value);

        } else {
            navigateTo('/')
            alert('signout')
            isLoggedIn.decrement()
            console.log(proved.value);
        }
    });
    
}