import React from 'react';
import Content from './Content'

const leftpanel = ({props}) => {
    console.log(props)
    return (
        <div className="panel left-panel">
            <Content props={props}/>
            <img src={require("./rocket.svg")} alt="photo" className="image" / >
        </div>
    )
}

export default leftpanel
