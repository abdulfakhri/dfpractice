import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
/*
Validation function and component is 
intiated here that consist the form 
and validate the it as well, by using the Formik and Yup
also using Arrow function here
*/
const Validation = () => (
  //Using the Formik component here and inside Formik adding html form
  <Formik
    //intializes the form input fields that we want to collect their data
    initialValues={{ email: "", password: "", rememberMe: "" }}
  /*
   Creating the validationSchema using Yup to make the validation messages for the email and password fields 
   in case if its blank or entered wrong value.
  */
    validationSchema={
      Yup.object().shape({
        email: Yup.string()
          .email()
          .required("email is required"),
           password: Yup.string()
          .required("password is not provided")
          .min(8, "Password must should be at least 8 chars")
          .matches(/(?=.*[0-9])/, "password must contain a number")
      })
    }
  >

    {props => {
      const { values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit } = props;
      return (
        <div className="login">
          <form onSubmit={handleSubmit} method="POST">
            <h1>Sign in </h1>

            <div className="email">
              <label htmlFor="email">Email</label>
              <input name="email" type="text" value={values.email} onChange={handleChange} onBlur={handleBlur}
                className={errors.email && touched.email && "error"}
              />
              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}
            </div>

            <div className="password">
              <label htmlFor="email">Password</label>
              <input name="password" type="password" value={values.password} onChange={handleChange} onBlur={handleBlur}
                className={errors.password && touched.password && "error"} />
              {errors.password && touched.password && (
                <div className="input-feedback">{errors.password}</div>
              )}
            </div>

            <div className="checkbox">
              <label className="label_checkbox">
                <input type="checkbox" value={values.rememberMe} onChange={handleChange}
                  onBlur={handleBlur} name="rememberMe" id="rememberMe" /> Remember me
              </label>
            </div>

            <div className="sign_button">
              <button type="submit" disabled={isSubmitting}>
                Sign in
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