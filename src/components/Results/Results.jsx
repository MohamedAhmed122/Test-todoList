import React from 'react'

import './ResultsStyle.css'

import user from '../../assets/user.png'

const Result =({item, handleDelete, handleSelected})=>{
    const {des,image,date,name} =item;
    return(
        <div className='result'>
            <div>
                <img src={item.image || user} alt='model'/>
                <h4>{item.name}</h4>
            </div>
            <div>
                <div className='item'>
                    <p className='description'>{item.des}</p>
                    <p className='date'>{item.date}</p>
                    <div>
                        <button
                         className='delete-btn button' onClick={()=>handleDelete(item.id)}>Delete</button>
                        <button 
                        onClick={()=> handleSelected(item)}
                        className='edit-btn button'>Update</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Result;