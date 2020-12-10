import React from "react";
//import { Link } from "react-router-dom";
//import Axios from "axios";

class ListPage extends React.Component{
    state = {
        musician: []
    };

    /*
    const getMusicians = async() => {
        const response = await Axios.get();
        console.log(response);
    }
    
    componentDidMount(){
        Axios.get()
            .then((resp) => {
                const musicians = resp.data;
                this.setState({musicians});
            });
    }
*/
    render(){
        return(
            <section id="musician-list">
                <h1 id="musician-list-title">Musicians</h1>
                <table id="musician-table">
                    <thead className="thead-dark">
                        <tr>
                            <th>Musician ID</th>
                            <th>Musician Name</th>
                            <th>Mood</th>
                            <th>Instruments</th>
                        </tr>
                    </thead>
                    <tbody id="musician-table-data">
                        <tr>
                            <td>1</td>
                            <td>Daniel Reyes</td>
                            <td>Jazz</td>
                            <td>Keyboard</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        )
    }
}

export {ListPage}