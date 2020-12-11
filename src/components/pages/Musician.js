import React from 'react';

const Musician = ({ musician }) => {

   return (
      <tr>
         <td>{musician.id}</td>
         <td>{musician.name}</td>
         <td>{musician.mood}</td>
         <td>{musician.instruments.map(instrument => <div>{instrument.instrument}</div> )}</td>
      </tr>
   )
}

export default Musician;