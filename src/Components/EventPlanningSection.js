import React from 'react';
import { Row, Col, Button } from 'antd';
const EventPlanningSection = () => {
  const sectionStyle = {
    backgroundColor: '#1c1c1c',
    padding: '50px 50px',
    color: '#fff',
    display: 'flex',
    height:'200px',
    justifyContent: 'space-between', 
    alignItems: 'center',
  };
  const titleStyle = {
    fontSize: '2.5em', 
    fontWeight: 'bold',
    marginBottom: '20px', 
  };
  const buttonStyle = {
    background: 'linear-gradient(90deg, #ff7e5f, #feb47b)',
    border: 'none',
    color: '#fff',
    height: '5vh',
    borderRadius: '20px',
    padding: '10px 20px',
  };

  return (
    <div style={sectionStyle}>
      <Row justifyContent="center" style={{ width: '100%' }} gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <div style={titleStyle}>Premium Event Planning Services</div>
        </Col>
        <Col xs={24} md={12} style={{ display: 'flex', justifyContent: 'center' }}>
          <Button type="primary" style={buttonStyle}>
            BOOK A FREE CONSULTATION
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default EventPlanningSection;
