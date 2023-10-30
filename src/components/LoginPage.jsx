import React,{useRef,useState,useEffect} from 'react'
import {auth} from "../utils/firebase"
import { checkValidate } from '../utils/validate'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser,removeUser } from '../centralStore/userSlice';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,onAuthStateChanged 
} from "firebase/auth";




const LoginPage = () => {
const [isSignIn , setIsSignIn] = useState(true)
const [errorMsg, SetErrorMsg] = useState(null);
const navigate = useNavigate()
const dispatch = useDispatch()


  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);


   const handleIsSignIn =()=>{
    setIsSignIn(!isSignIn)
   }
  const handleOnSignButton = () => {
    
  

    let msg;
    if (isSignIn) {
      msg = checkValidate(email.current.value, password.current.value);
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          SetErrorMsg(errorCode + "-" + errorMessage);
        });
    } else {
      msg = checkValidate(
        email.current.value,
        password.current.value,
        username.current.value
      );

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: username.current.value,
            photoURL: 'https://www.exampleimguser.com',
          })
            .then(() => {
              const { uid, email, displayName,photoURL } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName ,photoURL:photoURL })
              );
            })
            .catch((error) => {
              SetErrorMsg(errorMsg);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          SetErrorMsg(errorCode + "-" + errorMessage);
          // ..
        });
    }

    SetErrorMsg(msg);
  };





  useEffect(()=>{

  const Unsubscribe =  onAuthStateChanged(auth, (user) => {
    if (user) {
   
      const {uid,email,displayName,photoURL} = user;
       dispatch(addUser({uid:uid, email:email,displayName:displayName,photoURL:photoURL}) )
       navigate("/main")
    } else {
      // User is signed out
     dispatch(removeUser())
     navigate("/")
    }
  });

  return () => Unsubscribe();
  },[])







  return (
    <div className='login-page'>
     <div className='login-body'>
  <form className='login-form' onClick={(e)=>e.preventDefault()}>
  <p className='login-title'>{!isSignIn?"Register":"Login"}</p>
  <p className='error-msg'>{errorMsg}</p>
  {!isSignIn &&( <input type='text' ref={username} placeholder='Enter your name'/>)}
  


   <input type='text' ref={email} placeholder='Enter your e-mail'/>
   <input type='password' ref={password} placeholder='Enter your password'/>
   <button className='login-button' onClick={handleOnSignButton}>{!isSignIn ? "Register" : "Login"}</button>
   <p className='signup-text'>{!isSignIn? "Already have account ?": "Don`t have account?"} <span className='register-now' onClick={handleIsSignIn}>{!isSignIn?"Login now":"Register now" }</span></p>
  </form>
     </div>
   
    </div>
  )
}

export default LoginPage
