//import { render } from "@testing-library/react";
import React from "react";

export default class Showcase extends React.Component{

   // state ={
   //     items:[]
    //}

    render(){
        return(
            <header>
                <nav className="">
                    <div className="nav-container">
                        <div className="logo"><a href="/">Musicians Studio</a></div>
                        <ul>
                            <li><buton className="nav-btn current-page" onClick={() => console.log('home btn called')}>Home</buton></li>
                            <li><buton className="nav-btn" >Musicians</buton></li>
                            <li><buton className="nav-btn" >Add Musicians</buton></li>
                            <li><buton className="nav-btn" >Delete Musicians</buton></li>
                            <li><buton className="nav-btn" >Update Musicians</buton></li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }

}