import { useState, useEffect } from 'react';
import React from 'react'
import axios from 'axios';
import { MagnifyingGlass } from 'react-loader-spinner'
import { Table } from 'antd';
const url = 'https://api.api-onepiece.com/characters';



// axios.get(url).then((response) => {
//   const Data_1 = response.data 
//   Data_1.forEach((itme,index) => {
//        data.push({
//         key: index,
//         name: itme.french_name,
//       });
//       console.log(itme);
//   })


 
  // })
function DataOnepiece() { 
  const data = [];
  const columns = [
    {
      title: 'Name',
      dataIndex:'name',
    },
  ];
  data.push({
    key: "1",
    name: "asdasd",
  });
  const [charactersAll, setCharactersAll] = useState([])
  const [loading, setLoading] = useState(1)
  const fetachDataOnepiece = async ()=>{
  try{
    setLoading(true)
    const response = await axios.get(url)
    const Data_1 = response.data 
    Data_1.forEach((itme,index) => {
             data.push({
              key: index,
              name: itme.french_name,
            });
            console.log(itme);
        })
    console.log(data);
  } catch(error){
    console.log("error");
  } finally{
    setLoading(false);
  }


}


 







  return (
    <>
      <div style={{ display: 'flex', justifyContent: "center", textAlign: "center", width: "90%", margin: "0 auto" }} >
        <div style={{ width: "100%" }}>
            <div> 
                <button onClick={fetachDataOnepiece}>Get DATA </button>

            </div>
          <Table columns={columns} dataSource={data} />

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
