import { useState, useEffect } from 'react';
import React from 'react'
import axios from 'axios';
import { MagnifyingGlass } from 'react-loader-spinner'
import { Table } from 'antd';
const url = 'https://api.api-onepiece.com/characters';
axios.get(url).then((response) => {
  var Data = response.data
  console.log("DATA",Data);
})
  .catch((error) => {
  });

function DataOnepiece() {
  const [data, setData] = useState([])

  return (
    <>
      <div style={{ display: 'flex', justifyContent: "center", textAlign: "center", width: "90%", margin: "0 auto" }} >
        <div style={{ width: "100%" }}>

          {/* // <Table columns={columns} dataSource={data} /> */}
          <div>11</div>
        </div>

      </div>

    </>
    // <div style={{ display: 'flex', justifyContent: "center", textAlign: "center", width: "90%", margin: "0 auto" }}>
    //   <table >  {loading ? <tr>
    //     <th style={{ width: "100px" }}>Name</th>

    //     <th style={{ width: "100px" }} >Bounty</th>
    //   </tr> : <MagnifyingGlass
    //     visible={true}
    //     height="80"
    //     width="80"
    //     ariaLabel="MagnifyingGlass-loading"
    //     wrapperStyle={{}}
    //     wrapperClass="MagnifyingGlass-wrapper"
    //     glassColor='#c0efff'
    //     color='#e15b64'
    //   />}




    //     {charactersAll.map(All => (

    //       <tr>
    //         <td>{All.french_name}</td>

    //         <td>{All.bounty}</td>

    //       </tr>
    //     ))}
    //   </table>

    // </div>
  )
}

export default DataOnepiece
