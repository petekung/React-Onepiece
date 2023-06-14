import { useState, useEffect } from 'react';
import React from 'react'
import axios from 'axios';
import { MagnifyingGlass } from 'react-loader-spinner'
import { Table, Typography, Card, Space } from 'antd';
const { Text } = Typography;
function DataOnepiece() {
  const DataALL = [];
  const [data, setData] = useState([])
  const columns = [

    {
      key: "1",
      title: 'Name',
      dataIndex: 'name',
      width: "100px"
    },
    {
      key: "2",
      title: 'Bounty',
      dataIndex: 'bounty',
      width: "100px",
      render: (_, record) => (
        <div>
          <Text type="success">
            {record.bounty ? (
              record.bounty + "Belly"
            ) : (
              <Text type="warning"> Undisclosed</Text>
            )}
          </Text>
        </div>


      ),
    },
  ];

  data.forEach((item) => {
  
    DataALL.push({
      key: item.id,
      name: item.french_name,
      bounty: item.bounty,
    });
    
  });
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    getData();
  }, [])
  const getData = () => {
    const url = 'https://api.api-onepiece.com/characters';
    axios.get(url).then((response) => {
      var Data = response.data
      setData(Data)
      if (Data) {
        setLoading(true)
      }

    })
      .catch((error) => {
      }
      );

  }
  return (
    <>
      <div style={{ display: 'flex', justifyContent: "center", textAlign: "center", width: "90%", margin: "0 auto" }} >

        {loading ? <div style={{ width: "50%" }}>

          <Table columns={columns} dataSource={DataALL} />
        </div> : <MagnifyingGlass

        />}  
      </div>
      <div style={{ justifyContent: "center",display:"flex",flexDirection:"column",margin: "0 auto" ,width:"100%"}}>
        <div style={{ justifyContent: "center",display:"flex",margin: "0 auto" }}>
        {data.map((item) => (
          <Space direction="vertical" size="middle" style={{ display: 'flex' ,width:"250px"}}>
            <Card title="Card" size="small">
              <p>{item.french_name}</p>
            
            </Card>
          </Space>
        ))}
        </div>

    

    </div>
  
    </>
  )
}

export default DataOnepiece
