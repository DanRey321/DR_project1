//import React from "react";
import Axios from 'axios';
import React, { useState } from "react";
//import{useState} from "react";

export const AddPage = () =>{

    /*
    this.state = {
        name: "",
        mood: "",
        instruments: [ "", "" ],

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    componentDidMount(){

    }


    handleSubmit = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

*/
const[user,setUser] = useState({
    name:"",
    password:""
})

const handleChange = (e) =>{
    setUser({...user,[e.target.name]: e.target.value});
}

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handle submit call');
    //const name = document.getElementById('user').value;
    //const password = document.getElementById('password').value;
    Axios.post('localhost:8080/MusicianServer/musician' , user, {
        withCredentials: true,
      }).then((resp) => {
        console.log(resp);
      });
}


    return(
    <section id="musician-form-main">
        <div className="form-wrap">
            <h1>Add new musician</h1>
            <p>Enter name, mood, and instruments: </p>
            <form>
                <div className="form-group">
                    <label htmlFor="musician-name">Musician Name</label>
                    <input type="text" id="musician-name" name="musician-name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="musician-mood">Musician Mood</label>
                    <input type="text" id="musician-mood" mood="musician-mood"/> 
                </div>
                <div className="form-group">
                    <label htmlFor="musician-instruments">Musician Instruments</label>
                    <select value="musician-instruments" id="musician-instruments" >
                            <option value="Guitar">Guitar</option>
                            <option value="Keyboard">Keyboard</option>
                            <option value="Vocals">Vocals</option>
                            <option value="Drums">Drums</option>
                            <option value="Keystar">Keystar</option>
                            <option value="Bass">Bass</option>
                    </select>
                </div>
                <button id="musician-submit" className="btn">Submit Musician</button>
            </form>
        </div>
    </section>
    )
}

//export{AddPage}