import React from "react";
//import{useState} from "react";

const DeletePage = () =>{
    return(
    <section id="musician-form-delete">
        <div className="form-wrap">
            <h1>Delete Musician</h1>
            <p>Enter name:  </p>
            <form>
                <div className="form-group">
                    <label htmlFor="musician-name">Musician Name</label>
                    <input type="text" id="musician-name" name="musician-name" />
                </div>
                
            
                <button id="musician-submit" className="btn">Submit Musician</button>
            </form>
        </div>
    </section>
    )
}

export default DeletePage;