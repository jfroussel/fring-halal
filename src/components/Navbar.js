import React, { Component } from 'react';
import Logo from '../assets/logo.png'


const style = {
    navbar: {
        height:'100px',
        backgroundColor: '#000'
    },
    connect: {
        color: '#ff2c38',
        fontWeight: 'bold'
    },
    icon: {
       marginTop: '-6px'
        
    },
    logo: {
        width: '100%'
    }
}
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark  fixed-top" style={style.navbar}>
                <a className="navbar-brand" href="">
                    <img src={Logo} alt='logo' style={style.logo} />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse  justify-content-end " id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="">ACCUEIL<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item pl-3">
                            <a className="nav-link" href="">NOS MENUS</a>
                        </li>
                        <li className="nav-item pl-3" >
                            <a className="nav-link" href="">CHARTE DE QUALITE</a>
                        </li>
                        <li className="nav-item pl-3">
                            <a className="nav-link" href="">NOUS CONTACTER</a>
                        </li>
                        <li className="nav-item pl-5 pr-5">
                            <a className="nav-link" style={style.connect} href=""><i className="fas fa-user-circle fa-2x" style={style.icon}></i></a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;