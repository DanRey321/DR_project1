import React from 'react';
import Axios from 'axios';
import {Redirect} from 'react-router-dom';

export default class User extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            LoggedIn: false
        };
    }

    submit = (event) => {
        event.preventDefault();
        console.log('test');
        const user = document.getElementById('user').value;
        const code = document.getElementById('password').value;

        Axios.post(`http://18.191.201.76:8080/MusicianServer/user?username=${user}&userpass=${code}`, {}, {withCredentials: true})
        .then(response => {
            if(response.status === 201){
                console.log('test');
                console.log(response.config['xsrfCookieName']);
                this.setState({LoggedIn: true})
            }
        });
    }
    
    render(){

        return(
        <section id="musician-login">
            <div className="form-wrap">
                <h1>Login</h1>
                <p>Enter Username and Password:  </p>
                <form>
                    <div className="form-group">
                        <label htmlFor="musician-name">UserName</label>
                        <input type="text" id="user" name="musician-name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="musician-code">Password</label>
                        <input type="text" id="password" name="musician-code" /> 
                    </div>
                    
                    <button id="musician-submit" className="btn">Submit User</button>
                </form>
            </div>
        </section>
        )
    }
  


}

