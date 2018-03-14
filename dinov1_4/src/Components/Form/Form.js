import React, { Component } from 'react'
import './form.css'

class Form extends Component {
    state = {
        title: '',
        pay: '',
        description: '',
        interested: ''
    }

    postDataHandler = (props) => {
        props.preventDefault()
        const data = {
            title: this.state.title,
            pay: this.state.pay,
            description: this.state.description,
            interested: this.state.interested
        }
        this.props.addListing(data)
    }
    
    render () {

        return (
            <form className='Form'>
            <h2>Add a Job</h2>
            <label className='Label'>Title</label>
            <input type='text' value={this.state.title}className='Input' onChange={(event) => this.setState({title: event.target.value})}/>
            <label className='Label'>Compensation</label>
            <input className='Input' onChange={(event) => this.setState({pay: event.target.value})}/>
            <label className='Label'>Description</label>
            <textarea className='Input' id='textarea' onChange={(event) => this.setState({description: event.target.value})}></textarea>
            <button onClick={this.postDataHandler}>Submit</button>
        </form>
        )
    }
} 

export default Form