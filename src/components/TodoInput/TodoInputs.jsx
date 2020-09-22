import React from 'react'
import { useState } from 'react';
import './TodoInputs.css'
import cuid from "cuid";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormInput from '../FormInput/FormInput';


const TodoInputs =({handleCreateTodo ,selectedTodo ,handleUpdate})=>{

    const initialValues= selectedTodo ??{
        name: '',
        email: '',
        des: '',
        image: '',
        date: '',
    }
   
    const validationSchema = Yup.object({
        name: Yup.string().required("You must provide name"),
        email: Yup.string().required("You must provide Email"),
        des: Yup.string().required("You must provide Description "),
        date: Yup.string().required("You must provide Date"),
    })

    return(
        <div className='form-input'>
            <Formik
                onSubmit={(values ,{resetForm})=>{
                    selectedTodo ?
                    handleUpdate({...selectedTodo,...values}):
                    handleCreateTodo({
                        ...values,
                        id: cuid()
                    })
                    resetForm()
            }}
                initialValues={initialValues}
                validationSchema={validationSchema}
            >
                <Form>
                    <FormInput name='name' label='Name' placeholder='Name'/>
                    <FormInput  name='image' label='Image'  placeholder='Please Add URL Image (optional)' />
                    <FormInput  name='email' label='Email'  placeholder='Email' />
                    <FormInput  name='des' label='Descriptions' placeholder='Descriptions' />
                    <FormInput type='date' label='Date' name='date' placeholder='date' />
                    <button className='btn'  type='submit'>Submit</button>
                </Form>
            </Formik>
        </div>
    )
}
export default  TodoInputs;