import React, { useState,useRef } from 'react';
import Header from './Header';
import {checkValidData} from "../utils/validate"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase"

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage,setError]=useState(null);

  const email=useRef(null);
  const password=useRef(null);
  const name=useRef(null);
  const handlebuttonclick=()=>{
    //validate the form
    //checkvaliddata(email,password);
    const message= checkValidData(email.current.value,password.current.value,name.current.value);
    setError(message);
    if(message)
        return;
        //sign in sign up logic
        if(!isSignInForm){
            //signup logic
            createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorCode+"-"+errorMessage)
    // ..
  });

        }
        else{
            //sign in
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorCode+"-"+errorMessage);

  });
        }

  }
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative">
      <Header />
      <div className='absolute'>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="Netflix Logo"
        />
      </div>

      <form  onSubmit={(e) => e.preventDefault()}className='p-12 bg-black absolute w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-85'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

       {!isSignInForm &&( <input ref={name} type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-600 rounded-lg" />
       )}

        <input ref={email} type="text" placeholder="Email or Phone Number" className="p-4 my-4 w-full bg-gray-600 rounded-lg" />
        <input ref={password}type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-600 rounded-lg" />
        <p className='text-red-700 font-bold text-lg py-2 '>{errorMessage}</p>

        <button className='p-4 my-6 bg-red-700 text-white w-full rounded-lg' onClick={handlebuttonclick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
        {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
