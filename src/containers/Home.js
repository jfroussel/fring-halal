import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Menus from '../components/Menus'
import Charte from '../components/Charte'
import Contact from '../components/Contact'

const style = {
    container: {
        paddingLeft: 0,
        paddingRight: 0,
    }
}
class Home extends Component {
    render() {
        return (
            <div className="container-fluid" style={style.container}>
                <Navbar />
                <Header />
                <Menus />
                <Charte />
                <Contact />
            </div>
        );
    }
}

export default Home;