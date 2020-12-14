import React from "react";
import { NavLink } from 'react-router-dom';

const NavBarE = () => {

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
                            
                           
                            
                        </ul>
                    </div>
                </nav>
            </header>
        );
   

};
export default NavBarE;