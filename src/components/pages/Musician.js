import React from 'react';

const Musician = ({ musician }) => {

   return (
      <tr>
         <td>{musician.id}</td>
         <td>{musician.name}</td>
         <td>{musician.role_id}</td>
         <td>{musician.role}</td>
      </tr>
   )
}

export default Musician;