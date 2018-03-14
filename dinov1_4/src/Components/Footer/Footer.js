import React from 'react'

const Footer = () => {
    const style = {
        display: 'flex',
        justifyContent: 'flex-start',
        paddingLeft: '2%',
        position: 'absolute',
        bottom: '0',
        backgroundColor: 'white'
    }
    return (
        <div style={style}>
            <p>Copyright 2018</p>
        </div>
    )
}

export default Footer