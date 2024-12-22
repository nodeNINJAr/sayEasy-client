import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';


export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {
// user state
const [user, setUser]= useState(null);

// loader
const [loader, setloader] = useState(true);



// sign in with google
const signInWithGoogle =()=>{
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth , provider)
}
// sign Up using email password
const signUpUsingEmailPass =(email, pass)=>{
    return createUserWithEmailAndPassword(auth, email, pass)
}
// profile update
const userProfileUpdate =(userInfo)=>{
    return updateProfile(auth.currentUser,userInfo) 
  }
// sign In using email and pass
const signInUsingEmailpass=(email,pass)=>{
    return signInWithEmailAndPassword(auth,email,pass)
}
// sign user from firebase
const userSignOut=()=>{
    return signOut(auth)
}


//auth observer
useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth , (currentUser)=>{
     if(currentUser){
          setUser(currentUser);
          setloader(false);
     }else{
       setUser('');
     }
     setloader(false)
  })
   
  return ()=> unsubscribe();

},[])




// transporter
const authInfo ={
    signInWithGoogle,
    signUpUsingEmailPass,
    userProfileUpdate,
    signInUsingEmailpass,
    userSignOut,
    user,
    loader,

   


}


    return <AuthContext.Provider value={authInfo}>
             {children}
    </AuthContext.Provider>
}
export default AuthProvider;