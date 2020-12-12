import React from "react";
import Axios from "axios";
//import { login } from "../../store/actions";
// would need for class components
// import { connect } from "react-redux";
//import { useDispatch } from "react-redux";

export default class DeletePage extends React.Component {
    // const[name1,setUser] = useState({
    //     name:""
    // })

    state = {
        name: '',
    }
    //const dispatch = useDispatch();

    handleChange = (e) =>{
    this.setState({name: e.target.value});
    }

    handleSubmit = (e) => {
    e.preventDefault();
    console.log('handle submit call');
    //const name = document.getElementById('nameD').value;
    Axios.delete(`http://18.191.201.76:8080/MusicianServer/musician?name=${this.state.name}` , {}, {
        withCredentials: true,
      }).then((resp) => {
        console.log(resp);
      });
}
    render(){
    return(
        <section id="musician-delete">
                <div className="form-wrap">
                    <h1>Delete User</h1>
                    <p>Enter Name of user you want to Delete: </p>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="musician-name">Name: </label>
                            <input type="text" name="name" onChange={this.handleChange} />
                        </div>
                        
                        
                        <button id="musician-submit" className="btn">Submit User</button>
                    </form>
                </div>
        </section>
    )
}


}