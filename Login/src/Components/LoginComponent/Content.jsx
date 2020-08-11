import React, { Component } from 'react';
import Container from './Container'

class Content extends Component {
    
    render(){
        return (
            <div className="content">
                <h3 >New Here ? </h3>
                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi tenetur officiis quae veritatis, tempora dolore.</p>
                <button onClick={this.props.props.onClick}  className="btn transparent" id="sign-up-btn">Sing Up</button>
            </div>
        )
    }
}

export default Content;
