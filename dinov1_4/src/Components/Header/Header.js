import React from 'react'

const Header = () => {
    const style = {
        display: 'flex',
        justifyContent: 'flex-start',
        paddingLeft: '2%'
    }
    return ( 
    <div style={style}>
        <img src='./Assets/g-dino.png' alt='galvanize logo' style={{height: '100px' }}/>
    </div>
    )
}

export default Header