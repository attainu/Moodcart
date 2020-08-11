import React from 'react'

const Rightpanel = ({props}) => {
    return (
        <div className="panel right-panel">
            <div className="content">
                <h3 >One of us ? </h3>
                <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi tenetur officiis quae veritatis, tempora dolore.</p>
                <button onClick={props.onClick} className="btn transparent" id="sign-in-btn">Sing In</button>
                
            </div>
                <img className="image" src={require("./desk.svg")} alt=""/>
            
        </div>
    )
}

export default Rightpanel
