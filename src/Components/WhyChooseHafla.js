import React from 'react';
import { Row, Col, Button } from 'antd';
import { DollarOutlined, ShoppingCartOutlined, SafetyCertificateOutlined, CustomerServiceOutlined, CarOutlined } from '@ant-design/icons';

const WhyChooseHafla = () => {
  return (
    <div>

      <div style={{ backgroundColor: '#1d1d1d', padding: '40px 0', textAlign: 'center' }}>
        <h1 style={{ color: 'white', fontSize: '32px' }}>Become a Partner</h1>
        <p style={{ color: 'white', fontSize: '16px' }}>3 easy steps to join the Hafla!</p>
        <Button
          type="primary"
          style={{
            background: 'linear-gradient(to right, orange, pink)',
            border: 'none',
            marginRight: '20px',
          }}
        >
          START HERE
        </Button>
        <Button
          type="primary"
          style={{
            background: 'linear-gradient(to right, orange, pink)',
            border: 'none',
          }}
        >
          PLAN YOUR EVENT
        </Button>
      </div>

    
      <div style={{ padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold' }}>WHY CHOOSE HAFLA</h2>
        <div
          style={{
            width: '50px',
            height: '3px',
            background: 'linear-gradient(to right, orange, pink)',
            margin: '10px auto 20px',
          }}
        ></div>
        <p style={{ fontSize: '16px', maxWidth: '600px', margin: '0 auto' }}>
          Find everything you need to make your events a success! Whether it’s event equipment rental or corporate event supplies, enjoy end-to-end solutions from ideas all the way to execution.
        </p>


        <Row gutter={[16, 16]} justify="center" style={{ marginTop: '40px' }}>
          <Col xs={24} sm={12} md={4} style={{ textAlign: 'center' }}>
            <DollarOutlined style={{ fontSize: '48px', color: '#FF6347' }} />
            <h3 style={{ fontSize: '18px', marginTop: '10px' }}>BEST PRICE GUARANTEE</h3>
          </Col>

          <Col xs={24} sm={12} md={4} style={{ textAlign: 'center' }}>
            <ShoppingCartOutlined style={{ fontSize: '48px', color: '#FF6347' }} />
            <h3 style={{ fontSize: '18px', marginTop: '10px' }}>UNLIMITED SUPPLIES</h3>
          </Col>

          <Col xs={24} sm={12} md={4} style={{ textAlign: 'center' }}>
            <SafetyCertificateOutlined style={{ fontSize: '48px', color: '#FF6347' }} />
            <h3 style={{ fontSize: '18px', marginTop: '10px' }}>TRUSTED QUALITY PARTNERS</h3>
          </Col>

          <Col xs={24} sm={12} md={4} style={{ textAlign: 'center' }}>
            <CustomerServiceOutlined style={{ fontSize: '48px', color: '#FF6347' }} />
            <h3 style={{ fontSize: '18px', marginTop: '10px' }}>FAST CUSTOMER SERVICE</h3>
          </Col>

          <Col xs={24} sm={12} md={4} style={{ textAlign: 'center' }}>
            <CarOutlined style={{ fontSize: '48px', color: '#FF6347' }} />
            <h3 style={{ fontSize: '18px', marginTop: '10px' }}>QUICK DELIVERY</h3>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default WhyChooseHafla;
