import React from "react";
import { NavLink } from 'react-router-dom';

const NavBar = () => {

   // state ={
   //     items:[]
    //}

    
        return(
            <header>
                <nav className="">
                    <div className="nav-container">
                        <div className="logo"><a href="/">Musicians Studio</a></div>
                        <ul>
                            <li><NavLink to="/"><button className="nav-btn">Home</button></NavLink></li>
                            <li><NavLink to="/view">View Musicians</NavLink></li>
                            <li><NavLink to="/add">Add Musicians</NavLink></li>
                            <li><NavLink to="/delete">Delete Musicians</NavLink></li>
                            <li><NavLink to="/update">Update Musicians</NavLink></li>
                            <li><NavLink to="/loginpage">Login</NavLink></li>
                            
                        </ul>
                    </div>
                </nav>
            </header>
        );
   

};
export default NavBar;