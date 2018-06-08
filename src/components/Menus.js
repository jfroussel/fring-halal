import React, { Component } from 'react'
import MenuCard from './MenuCard'
const style = {
    container: {
        backgroundColor: 'rgba(204, 204, 204, 0.62)'
    }
}
class Menus extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center pt-5" style={style.container}>
                <MenuCard />
            </div>
        );
    }
}

export default Menus