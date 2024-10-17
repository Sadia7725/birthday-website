import React from 'react';
import { Row, Col, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const HeroSection = () => {
  const backgroundStyle = {
    backgroundImage: 'url("/images/background.png")',

    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    color: '#fff',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const titleStyle = {
   
    fontSize: '3em',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const searchStyle = {
    width: '80%',
    maxWidth: '500px',
    marginTop: '20px',
  };

  return (
    <div style={backgroundStyle}>
      <Row justify="center" align="middle" style={{ height: '100%' }}>
        <Col>
          <div style={titleStyle}>EVENTS SIMPLIFIED.</div>
          <Input
          
            placeholder="What are you searching for?"
            prefix={<SearchOutlined />}
            style={searchStyle}
          />
        </Col>
      </Row>
    </div>
  );
};

export default HeroSection;