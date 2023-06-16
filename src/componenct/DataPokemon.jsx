import { useState, useEffect } from 'react';
import React from 'react'
import axios from 'axios';
import { MagnifyingGlass } from 'react-loader-spinner'
import { Table, Typography, Card, Space, Avatar, Skeleton, Switch, Col, Row, Slider,Pagination ,Dropdown } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Text } = Typography;
const { Meta } = Card;
function DataOnepiece() {
  const DataALL = [];
  const [data, setData] = useState([])
  const columns = [
    {
      key: "1",
      title: 'ID',
      dataIndex: 'number',
      width: "1px",

    },
    {
      key: "1",
      title: 'Name',
      dataIndex: 'name',
      width: "40px",

    },
    {
      key: "1",
      title: 'Name',
      dataIndex: 'name',
      width: "40px",

    },


  ];
  data.forEach((item) => {
    DataALL.push({
      key: item.url,
      name: item.name,
    });
  });
  const [loading, setLoading] = useState(true)
  const [loading_2, setLoading_2] = useState(false)
  const [hasData, setHasData] = useState(true);
  const onChange = (checked) => {
    setLoading(!checked);
    getData();
  };
  // useEffect(() => {
  //   getData();
  // }, [])
  const getData = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';
    axios.get(url).then((response) => {
      var Data = response.data
      var Data_2 = Data.results
      console.log(Data_2);
      setData(Data_2)
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
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}> <Switch checked={!loading} onChange={onChange} />
      </div>
      <div style={{ display: 'flex', justifyContent: "center", textAlign: "center", width: "100%", margin: "0 auto" }} >
        {loading ? <div style={{ width: "50%", height: "50%" }}>
          <Table
            style={{ fontSize: "10px" }}
            columns={columns}
            dataSource={DataALL}
            pagination={false}
            scroll={{
              x: 2000,
              y: 500,
            }}
            bordered

          />
  
        </div> : <div style={{ height: "490px" }}>
          <MagnifyingGlass />  </div>}
        {/* <Card title="Card title" bordered={false} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card> */}
        {/* {data.map((item)=>

      <Card
      style={{
        width: 300,
        marginTop: 16,
        display:"flex",
        flexDirection:"column"
      
      }}
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Skeleton loading={loading_2} avatar active>
        <Meta
          avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />}
          title="Card title"
          description="This is the description"
        />
      </Skeleton>
    </Card>
      
      
      
      
      
      )}  */}

      </div>
      {/* <div style={{ justifyContent: "center",display:"flex",flexDirection:"column",margin: "0 auto" ,width:"100%"}}>
        <div style={{ justifyContent: "center",display:"flex",margin: "0 auto" }}>
        {data.map((item) => (
          <Space direction="vertical" size="middle" style={{ display: 'flex' ,width:"250px"}}>
            <Card title="Card" size="small">
              <p>{item.french_name}</p>
            
            </Card>
          </Space>
        ))}
        </div> */}



      {/* </div> */}

    </>
  )
}

export default DataOnepiece
