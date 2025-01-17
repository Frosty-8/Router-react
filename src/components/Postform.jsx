

import React from 'react'
import {useFormik} from 'formik';
import { useNavigate } from 'react-router-dom';

export const SignupForm = () => {
    const navigate = useNavigate();

    const navigateToPage=()=>{
      navigate('/Home');
    };

  const formik = useFormik({
    initialValues: {
        email : "" , password : "", username : "",
    },
    validate:(values)=>{
        let errors = {};
        if(!values.email){
            errors.email = "Email is required"
        }
        if(!values.password){
            errors.password = "Password is required"
        }
        if(!values.username){
            errors.username = "Username is required"
        }
        return errors;

    },

    onSubmit: (values) =>{
        alert(JSON.stringify(values,null,2));
        navigateToPage();
    },

  });
  
    return (
    <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" onChange={formik.handleChange} value ={formik.values.username}/>
        <br />
        <div>
            {formik.touched.username && formik.errors.username ? (
                <div>{formik.errors.username}</div>
            ):null}
        </div>

        <label htmlFor="email">Email</label>
        <input type="text" id="email" onChange={formik.handleChange} value ={formik.values.email}/>
        <br />
        <div>
            {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
            ):null}
        </div>

        <label htmlFor="password">Password</label>
        <input type="password" id="password" onChange={formik.handleChange} value ={formik.values.password}/>
        <br/>
        <div>
            {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
            ):null}
        </div>

        <button type="submit">Register</button>
        <br /><br />
    </form>
  )
}
// signup form component is created