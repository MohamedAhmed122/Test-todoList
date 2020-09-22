import React from 'react'

import { useField } from "formik";
const FormInput = ({ label, ...props }) =>{

    const [field, meta] = useField(props);
    return(
        <form  error={meta.touched && !!meta.error}>
            <label>{label}</label>
            <input {...field} {...props}/>
            {meta.error && meta.touched ? (
                <label style={{color: 'red'}} >
                {meta.error}
                </label>
            ) : null}
        </form>
    )
}
export default FormInput;