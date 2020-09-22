import React from 'react'

import './ResultsStyle.css'

const Result =({item, handleCreateTodo})=>{
    return(
        <div className='result'>
            <div>
                <img src={item.image} alt='model'/>
                <h4>{item.name}</h4>
            </div>
            <div>
                <div className='item'>
                    <p className='description'>{item.des}</p>
                    <p className='date'>{item.date}</p>
                    <div>
                        <button className='delete-btn button'>Delete</button>
                        <button className='edit-btn button'>Update</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Result;