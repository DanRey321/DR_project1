import React from 'react';
import {NavLink}  from "react-router-dom" ;

export default class Homepage extends React.Component{
    render(){
        return(
            <div id="showcase">
                <div className="my-container">
                    <div id="showcase-content">
                        <h1>Musician Lobby</h1>
                        <p>Music studio, storing data about a few musicians, their current mood, and what instruments they use.</p>
                        <NavLink to="/add"><button className="btn">View Musicians</button></NavLink>
                        
                    </div>
                </div>
            </div>
        );
    }
}
//