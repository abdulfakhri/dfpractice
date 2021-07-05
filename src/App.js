import React from "react";
import { Formik } from "formik";

/*
Validation function and component is 
intiated here that consist the form 
and validate the it as well, by using the Formik and Yup
also using Arrow function here
*/
const Validation = () => (
  //Using the Formik component here and inside Formik adding html form
  <Formik>

    <div class="login">
      <form method="POST">
        <h1>Sign in </h1>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input name="email" type="text" />
        </div>
        <div className="password">
          <label htmlFor="email">Password</label>
          <input name="password" type="password" />
        </div>
        <div className="checkbox">
          <label className="label_checkbox">
            <input type="checkbox" /> Remember me
          </label>
        </div>
        <div className="sign_button">
          <button type="submit" >
            Sign In
          </button>
        </div>
        <div className="links">
          <span ><a href="/password_rest" target="_blank">Forget Your Password?</a></span>
          <span>Dont have an account?<a href="/signup" target="_blank">Sign up</a></span>
          <span><a href="/resend_email" target="_blank">Resend email confirmation</a></span>
        </div>
      </form>

    </div>

  </Formik >

);
//we need to export this App function to make it accessible
export default Validation;