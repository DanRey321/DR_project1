import React from "react";
//import { NavLink } from 'react-router-dom';

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
                            <li><button className="nav-btn" ><a href="/">Home</a></button></li>
                            <li><button className="nav-btn" ><a href="/view">Musicians</a></button></li>
                            <li><button className="nav-btn" ><a href="/add">Add Musicians</a></button></li>
                            <li><button className="nav-btn" ><a href="/delete">Delete Musician</a></button></li>
                            <li><button className="nav-btn" ><a href="/update">Update Musician</a></button></li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
   

};
export default NavBar;