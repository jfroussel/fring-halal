import React, { Component } from 'react';
import Img from '../assets/home.jpg'
import MenuData from './MenuData'

const style = {

    card: {
        width: '22rem'
    },
    price: {
        color: 'orange',
        fontWeight: 'bold',
        fontSize: '40px'
    },
    euro: {
       
        fontSize: '60px',
        
    }
   

}



class MenuCard extends Component {
    componentWillMount() {
        console.log(MenuData)
    }
    render() {

       
        return (
            <div className="row">
                {
                    MenuData.map((data) => {
                        return (
                            <div className="card ml-5 mb-3" style={style.card} key={data.id}>
                                <img className="card-img-top" src={Img} alt="Card" />
                               
                                <div className="card-body">
                                    <h5 className="card-title">{data.name}</h5>
                                    <p className="card-text">{data.description}</p>
                                    <ul>
                                        <li>Garniture : {data.garniture}</li>
                                        <li>Boissons : {data.boisson}</li>
                                        <li>Desserts : {data.dessert}</li>
                                    </ul>
                                    <p className="text-right" style={style.price}>{data.price}<span style={style.euro}>€</span></p>
                                    
                                    <a href="#" className="btn btn-danger">Je commande </a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}




export default MenuCard;