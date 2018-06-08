import React, { Component } from 'react';
import Navbar from '../components/Navbar'
import Header from '../components/Header'

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
            </div>
        );
    }
}

export default Home;