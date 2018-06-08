import React, { Component } from 'react';
import HeaderImage from '../assets/home.jpg'

const style = {
    header: {
        width: 'auto',
        height: '1000px',
        objectFit: 'contain',
        backgroundImage: `url(${HeaderImage})`,
        backgroundSize: 'cover',
        paddingTop: '100px'


    }
}
class Header extends Component {
    render() {
        return (
            <div style={style.header}>
                
            </div>
        );
    }
}

export default Header;