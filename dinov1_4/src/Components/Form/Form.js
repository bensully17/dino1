import React from 'react'
import './form.css'

const Form = () => {
    return (
        <form className='Form'>
            <h2>Add a Job</h2>
            <label className='Label'>Title</label>
            <input className='Input'/>
            <label className='Label'>Compensation</label>
            <input className='Input'/>
            <label className='Label'>Description</label>
            <textarea className='Input' id='textarea'></textarea>
            <button>Submit</button>
        </form>
    )
}

export default Form