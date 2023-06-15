import React from 'react';
import { Col, Row } from 'antd';

const App  = () => (
  <Row>
    <Col span={24}>
    <div  style={{display:"flex",widows:"90%",margin:"0 auto",justifyContent:"center"}}>
     <a href='/'> <h1 style={{marginRight:"10px"}} >Home </h1> </a> 
     <a href='/about'> <h1 style={{marginRight:"10px"}} >About </h1></a> 
      <h1 style={{marginRight:"10px"}} >Contact </h1>
    </div>

    </Col>
 
  </Row>  
);

export default App; 