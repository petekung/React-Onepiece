import { useState, useEffect } from 'react';
import React from 'react'
import axios from 'axios';


function DataOnepiece() {
  const [charactersAll, setCharactersAll] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    try{
      const url = 'https://api.api-onepiece.com/characters';
      axios.get(url).then((response) => {
     
        setCharactersAll(response.data)
        setLoading(true)
      })
    }catch(error) {
      console.log(error,"Error get data")
    } finally{
      setLoading(false);
    }

  }, []);

  return (

    <div style={{ display: 'flex', justifyContent: "center", textAlign: "center",width:"90%" ,margin:"0 auto"}}>

      <table >
        
        <tr>
          <th style={{width:"100px"}}>Name</th>
        
          <th style={{width:"100px"}} >Bounty</th>
        </tr>
        
        {charactersAll.map(All => (

          <tr>
            <td>{All.french_name}</td>
          
            <td>{All.bounty}</td>

          </tr>
        ))}
 </table>

    </div>
  )
}

export default DataOnepiece
