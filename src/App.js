import React from "react";
import { Formik } from "formik";

/*
Validation function and component is 
intiated here that consist the form 
and validate the it as well, by using the Formik and Yup
also using Arrow function here
*/
const Validation = () => (
  //Using the Formik component here
  <Formik>

    <form method="POST">
      <h1>Sign in </h1>
      <label htmlFor="email">Email</label>
      <input name="email" type="text" />


      <label htmlFor="email">Password</label>
      <input name="password" type="password" />

      <label className="label_checkbox">
        <input type="checkbox" /> Remember me
      </label>

      <button type="submit" >
        Sign In
      </button>
      <span ><a href="/password_rest" target="_blank">Forget Your Password?</a></span>
      <span>Dont have an account? <a href="/signup" target="_blank">Sign up</a></span>
      <span><a href="/resend_email" target="_blank">Resend email confirmation</a></span>
    </form>



  </Formik >

);
//we need to export this App function to make it accessible
export default Validation;