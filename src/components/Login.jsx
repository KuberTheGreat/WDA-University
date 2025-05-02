import React, { useEffect, useState } from "react";
 import { motion } from "framer-motion";
 import aimg from '../assets/login/a.png';
 import cimg from '../assets/login/c.jpg';
 import dimg from '../assets/login/d.svg';
 import googleimg from '../assets/login/google.png';
 import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";


 const carouselItems = [
   {
     title: "Empowering Your Education",
     description: "Log in to connect with classmates, manage your schedule, and unlock a world of learning resources.",
     image: aimg, 
   },
   {
     title: "Streamline Your Learning Journey",
     description: "Log in to connect with classmates, manage your schedule, and unlock a world of learning resources.",
     image: cimg,
   },
   {
     title: "Your Future Starts Here",
     description: "Log in to take the next step in your educational journey. We're here to help you succeed.",
     image: dimg,
   },
 ];
 
 const LoginPage = () => {
   const [currentSlide, setCurrentSlide] = useState(0);
 
   useEffect(() => {
     const interval = setInterval(() => {
       setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
     }, 5000);
 
     return () => clearInterval(interval);
   }, []);

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [isLogin, setIsLogin] = useState(true);
   const [error, setError] = useState("");

   const handleAuth = async (e) => {
    e.preventDefault();
    setError(""); // clear previous error

    const emailPattern =
      /^(lci|lit|lcs|lcb)202(1|2|3|4)0(0[1-9]|[1-5][0-9]|60)@iiitl\.ac\.in$/;
    if (!emailPattern.test(email)) {
      setError(
        "Only Institute email id is allowed."
      );
      return;
    }

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Signup successful!");
      }
    } catch (err) {
      setError(err.message); // set error for display
    }
  };
 
   return (
     <div className="h-screen flex">
         
       <div className="hidden lg:flex w-1/2 bg-blue-500 items-center justify-center relative overflow-hidden">
         <div className="w-full h-full flex items-center justify-center">
           <motion.div
             key={currentSlide}
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             exit={{ opacity: 0, x: -50 }}
             transition={{ duration: 0.8 }}
             className="text-center text-white space-y-6 px-10"
           >
             <img
               src={carouselItems[currentSlide].image}
               alt={`Slide ${currentSlide}`}
               className="w-3/4 mx-auto rounded-lg"
             />
             <h1 className="text-4xl font-bold">{carouselItems[currentSlide].title}</h1>
             <p className="text-lg">{carouselItems[currentSlide].description}</p>
           </motion.div>
         </div>
       </div>
 
      
       <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
         <div className="w-full max-w-md">
           <div className="text-center mb-8">
             <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
               <span className="text-blue-500 text-3xl font-bold">📘</span>
             </div>
             <h2 className="text-2xl font-bold text-gray-800 mt-4">{isLogin? "Hello Again!":"Create an Account"}</h2>
             <p className="text-gray-600">{isLogin?"Welcome back! Please log in to your account.":"Please Sign Up to continue"}</p>
           </div>
           
           
           <form className="space-y-6">
             <div>
               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                 Email
               </label>
               <div className="relative">
                 <input
                   id="email"
                   type="email"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                   placeholder="Enter your email"
                 />
                 <span className="absolute right-4 top-2/4 transform -translate-y-2/4 text-gray-400">
                   @
                 </span>
               </div>
             </div>
             <div>
               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                 Password
               </label>
               <div className="relative">
                 <input
                   id="password"
                   type="password"
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                   placeholder="Enter your password"
                 />
                 <span className="absolute right-4 top-2/4 transform -translate-y-2/4 text-gray-400">
                   🔒
                 </span>
               </div>
               {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
             </div>
             {isLogin?
             <div className="flex justify-between items-center">
               <label className="flex items-center">
                 <input
                   type="checkbox"
                   className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                 />
                 <span className="ml-2 text-sm text-gray-600">Remember Me</span>
               </label>
               <a href="#" className="text-sm text-blue-500 hover:underline">
                 Recovery Password
               </a>
             </div>:<></>}
             <button
               type="submit"
               onClick={handleAuth}
               className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
             >
                {isLogin ? "Login" : "Signup"}
             </button>
             <button
               type="button"
               className="w-full flex items-center justify-center border border-gray-300 text-gray-600 py-2 px-4 rounded-lg hover:bg-gray-100"
             >
               <img
                 src={googleimg}
                 alt="Google Logo"
                 className="h-5 w-5 mr-2"
               />
               Sign in with Google
             </button>
           </form>
           <p className="mt-6 text-sm text-center text-gray-600">
           {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            onClick={() => {
              setIsLogin(!isLogin);
              setError("");
            }}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            {isLogin ? "Signup" : "Login"}
          </span>
           </p>
         </div>
       </div>
     </div>
   );
 };
 
 export default LoginPage;