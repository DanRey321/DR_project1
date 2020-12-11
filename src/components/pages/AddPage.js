import React from "react";
//import Axios from 'axios';
import{useState} from "react";

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

    handleSubmit = (e) => {
        alert('A name was submitted: ' + this.state.value);
        e.preventDefault();

        const ObjectConfiguration = {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                name: this.state.name,
                mood: this.state.mood,
                instruments: this.state.instruments
            }),
        };

      }

*/
    


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