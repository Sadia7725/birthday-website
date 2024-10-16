import React from 'react';
import { Row, Col, Button } from 'antd';

const EventPlanningSection = () => {
  const sectionStyle = {
    backgroundColor: '#1c1c1c',
    padding: '50px',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center', // Centers horizontally
    alignItems: 'center', // Centers vertically
    minHeight: '300px', // Ensures enough space for responsiveness
  };

  const titleStyle = {
    fontSize: '2.5em',
    fontWeight: 'bold',
    textAlign: 'center', // Centers text in smaller screens
    marginBottom: '20px',
  };

  const buttonStyle = {
    background: 'linear-gradient(90deg, #ff7e5f, #feb47b)',
    border: 'none',
    color: '#fff',
    borderRadius: '20px',
    padding: '10px 20px',
    height: 'auto', // Ensure proper button height across devices
    fontSize: '1em', // Adjust font size
  };

  return (
    <div style={sectionStyle}>
      <Row justify="center" align="middle" gutter={[16, 16]} style={{ width: '100%' }}>
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
