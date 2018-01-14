import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css'
export default class Header extends Component {
    render() {
        return (
            <div className='header-container'>
                <Link to='/'>Home</Link>
                <Link to='/products'>Product</Link>
                <Link to='/about'>About</Link>
            </div>
        );
    }
}