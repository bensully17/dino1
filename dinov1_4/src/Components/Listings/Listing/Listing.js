import React from 'react'
import './Listing.css'

const Listing = (props) => {
    
    return (
    <div className='Listing'>
        <h3 id='title' className='listingItem'>
            {props.title}
        </h3> 
        <h6 id='pay' className='listingItem'>
            {props.pay}
        </h6>
        <p id='desc' className='listingItem'>
            {props.desc}
        </p>
        <h6 id='int' className='listingItem'>
            {props.dinos.length} dinos are interested
        </h6>
    </div>
    )
}

export default Listing 