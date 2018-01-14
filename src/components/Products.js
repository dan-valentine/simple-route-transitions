import React, { Component } from 'react';

export default class Products extends Component {

    componentDidMount(){
        this.props.setHeight(window.document.getElementById('products-container').clientHeight +'px')
    }
    render() {
        return (
            <div className='products-container' id='products-container'>
                Products
            </div>
        );
    }
}