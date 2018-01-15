import React, { Component } from 'react';
import './About.css'
export default class About extends Component {

    componentDidMount(){
        this.props.setHeight(document.getElementById('about-container').clientHeight +'px');
    }
    render() {
        return (
            <div className='about-container' id='about-container'>
                About
            </div>
        );
    }
}