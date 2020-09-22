import React from 'react'
import { useState } from 'react';
import './TodoInputs.css'
import cuid from "cuid";
const TodoInputs =({handleCreateTodo ,selectedTodo ,handleUpdate})=>{
    const initialValues= selectedTodo ??{
        name: '',
        email: '',
        des: '',
        image: '',
        date: '',
    }
    const [values, setValues] =useState(initialValues);


    const handleInputChange=(e)=> {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }

    const handleSubmit =(e) =>{
        e.preventDefault();
         selectedTodo ?
            handleUpdate({...selectedTodo,...values,}):
        handleCreateTodo({
            ...values,
            id: cuid()
        })
        
       
       
    }

    return(
        <div className='form-input'>
            <form>
                <label  >Name</label>
                <input value={values.name}
                 name='name' 
                 onChange={(e)=>handleInputChange(e)} placeholder='Name' 
                 />
                <label  >Photo</label>
                <input value={values.image} name='image' onChange={(e)=>handleInputChange(e)} placeholder='Please Add URL Image (optional)' />
                <label >Email</label>
                <input value={values.email} name='email' onChange={(e)=>handleInputChange(e)} placeholder='Email' />
                <label >Descriptions</label>
                <input value={values.des} name='des' onChange={(e)=>handleInputChange(e)} placeholder='Descriptions' />
                <label >Date</label>
                <input type='date' name='date' value={values.date} onChange={(e)=>handleInputChange(e)} placeholder='date' />
                <button className='btn'  type='submit' onClick={(e)=>handleSubmit(e)}>Submit</button>
            </form>
        </div>
    )
}
export default  TodoInputs;