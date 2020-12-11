import React from "react";
//import{useState} from "react";

const UpdatePage = () =>{
    return(
    <section id="musician-form-update">
        <div className="form-wrap">
            <h1>Update Musician Mood</h1>
            <p>Enter name and mood:  </p>
            <form>
                <div className="form-group">
                    <label htmlFor="musician-name">Musician Name</label>
                    <input type="text" id="musician-name" name="musician-name" />
                </div>
                <div className="form-group">
                    <label htmlFor="musician-mood">Musician Mood</label>
                    <input type="text" id="musician-mood" name="musician-mood" /> 
                </div>
                
                <button id="musician-submit" className="btn">Submit Musician</button>
            </form>
        </div>
    </section>
    )
}

export default UpdatePage;