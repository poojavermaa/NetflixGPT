import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const handleButtonClick = () => {
        // Validate the form data
        // checkValidateData(email, password)

        // console.log(email.current.value);
        // console.log(password.current.value);

        const message = checkValidData(email.current.value, password.current.value, name.current.value);
        setErrorMessage(message);
    };

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };


    return(
        <div>
            <Header />
            <div className="absolute">
              <img src="https://i.postimg.cc/90XZtRm8/bgImg.jpg" alt="bgimg" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="w-[30%] p-12 bg-black absolute right-0 left-0 m-auto my-32 text-white bg-opacity-85">
                <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input ref={name} type="text" placeholder="Full Name" className="p-2 my-3 w-full bg-gray-700"/>}
                <input ref={email} type="text" placeholder="Email Address" className="p-2 my-3 w-full bg-gray-700"/>
                <input ref={password} type="password" placeholder="Password" className="p-2 my-3 w-full bg-gray-700"/>
                <p className="text-red-500 font-bold text-lg">{errorMessage}</p>
                <button className="p-4 my-5 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now."}</p>
            </form>
        </div>
    );
};

export default Login;