import userEvent from '@testing-library/user-event';
import React, { Component } from 'react';
import { UserDispatch } from 'react-redux';
import { login } from "../../store/actions";
import 

const LoginPage = () => {
    const[user,setUser] = useState({
        name:"",
        passwword:""
    })

    const distpatch = useDispatch();
    
const handleChange = (e) =>{
    setUser({...userEvent,[e.target.name]: e.target.value});
}

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handle submit call');
}

    return(
        <section id="musician-login">
                <div className="form-wrap">
                    <h1>Login</h1>
                    <p>Enter Username and Password:  </p>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="musician-name">UserName</label>
                            <input type="text" id="user" name="name" value={user.name} onChange={this.values} />
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

export default LoginPage;