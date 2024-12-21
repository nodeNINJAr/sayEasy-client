import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from '../firebase/firebase.init';


export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {

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


// transporter
const authInfo ={
    signInWithGoogle,
    signUpUsingEmailPass,
    userProfileUpdate,
    signInUsingEmailpass,
   


}


    return <AuthContext.Provider value={authInfo}>
             {children}
    </AuthContext.Provider>
}
export default AuthProvider;