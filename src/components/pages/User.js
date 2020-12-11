import React, { Component } from 'react';
import Axios from 'axios';
//import {Redirect} from 'react-router-dom';

export default class User extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            //LoggedIn: false
            username: '',
            password: ''
        };
        this.values = this.values.bind(this);
        this.loging = this.loging.bind(this);
    }

    
    /*
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
    */

    loging (event){
        //const user = document.getElementById('user').value;
        //const code = document.getElementById('password').value;
        event.preventDefault();
        const req = Axios.post('http://18.191.201.76:8080/MusicianServer/user', {}, {withCredentials: true})
            .then((response) =>{
                console.log(response);
            });
    }

    values(event){
        const target = event.target;
        const value = target.type ==='checkbox' ? target.checked: target.value;
        const name = target.name;
        this.setState({
            [name]:value
        });

    }


    render(){

        return(
        <section id="musician-login">
            <div className="form-wrap">
                <h1>Login</h1>
                <p>Enter Username and Password:  </p>
                <form onSubmit={this.loging}>
                    <div className="form-group">
                        <label htmlFor="musician-name">UserName</label>
                        <input type="text" id="user" name="name" value={this.state.name} onChange={this.values} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="musician-code">Password</label>
                        <input type="text" id="password" placeholder= "password" name="musician-code" value={this.state.code} onChange={this.values} /> 
                    </div>
                    
                    <button id="musician-submit" className="btn">Submit User</button>
                </form>
            </div>
        </section>
        )
    }
  


}

