import Axios from "axios";//import React from "react";
import React, { useEffect, useState } from 'react';
import Musician from "./Musician";


const ListPage = () =>{
    
    const[musicians, setMusiicians] = useState([]);
    const getMusicians = async () => {
        const response = await Axios.get("http://18.191.201.76:8080/MusicianServer/musician" , {}, {withCredentials: true, headers: {'Access-Control-Allow-Origin': 'http://danrey-project1.s3-website.us-east-2.amazonaws.com'}});
        setMusiicians(response.data);
    }


    /*
   
    componentDidMount(){
        Axios.get()
            .then((resp) => {
                const musicians = resp.data;
                this.setState({musicians});
            });
    }
*/

        useEffect(() => {
            getMusicians();
        }, [ ])
    
        return(
            <div id="showcase3">
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
                        {
                            musicians.map(musician=>
                                (<Musician musician={musician} key={musician.id}/>)
                                )
                        }
                        
                    </tbody>
                </table>
            </section>
            </div>
        );
    
}

export default ListPage;