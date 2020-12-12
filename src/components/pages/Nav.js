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
                            <li><NavLink to="/view"><button className="nav-btn">View Musicians</button></NavLink></li>
                            <li><NavLink to="/add"><button className="nav-btn">Add Musicians</button></NavLink></li>
                            <li><NavLink to="/delete"><button className="nav-btn">Delete Musicians</button></NavLink></li>
                            <li><NavLink to="/update"><button className="nav-btn">Update Musicians</button></NavLink></li>
                            <li><NavLink to="/loginpage"><button className="nav-btn">Login</button></NavLink></li>
                            
                        </ul>
                    </div>
                </nav>
            </header>
        );
   

};
export default NavBar;