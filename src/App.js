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
  <Formik

    validationSchema={
      Yup.object().shape({
        email: Yup.string()
          .email()
          .required("Email is Required"),
        password: Yup.string()
          .required("Password is Not Provided")
          .min(8, "Password must should be at least 8 chars")
          .matches(/(?=.*[0-9])/, "Password must contain a number.")
      })
    }

  >
    {props => {
      const { values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit } = props;
      return (
        <div className="login">
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

      );

    }}
  </Formik >

);
//we need to export this App function to make it accessible
export default Validation;