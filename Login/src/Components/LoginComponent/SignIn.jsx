import React from 'react'
import { Component } from 'react';

class SignIn extends Component {
    render(){
        return (
            <form className="sign-in-form" >
    
                <h2 className="title">Sign in </h2>
                <div className="input-field">

                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Username" />
                </div>
                        
    
                <div className="input-field" >
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Password" />
                </div>
                        
                <input type="submit" value="Login" className="btn solid" />
                <p className="social-text">Or Sign in with social platform</p>
    
                <div className="social-media">
                    <a className="social-icon">
                        <i className="fab fa-facebook-f"></i>
                    </a>

                    <a className="social-icon">
                        <i className="fab fa-twitter"></i>
                    </a>

                    <a className="social-icon">
                        <i className="fab fa-google"></i>
                    </a>

                    <a className="social-icon">
                        <i className="fab fa-linkedin-in"></i>
                    </a> 
                </div>          
            </form>
            
        )
    }
}

export default SignIn;