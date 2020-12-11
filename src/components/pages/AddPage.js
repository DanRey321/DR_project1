import React from "react";
//import{useState} from "react";

export const AddPage = () =>{
    return(
    <section id="musician-form-main">
        <div className="form-wrap">
            <h1>Add new musician</h1>
            <p>Enter name, mood, and instruments: </p>
            <form>
                <div className="form-group">
                    <label htmlFor="musician-name">Musician Name</label>
                    <input type="text" id="musician-name" name="musician-name" />
                </div>
                <div className="form-group">
                    <label htmlFor="musician-mood">Musician Mood</label>
                    <input type="text" id="musician-mood" name="musician-mood" /> 
                </div>
                <div className="form-group">
                    <label htmlFor="musician-instruments">Musician Instruments</label>
                    <select name="musician-instruments" id="musician-instruments">
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