import React from 'react';
import { Row, Col } from 'antd';

const HaflaExperience = () => {
  const containerStyle = {
    padding: '50px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const subHeadingStyle = {
    fontSize: '1rem',
    color: '#888',
    marginBottom: '40px',
  };

  const rowStyle = {
    borderTop: '1px dashed #ddd',
    borderBottom: '1px dashed #ddd',
    padding: '20px 0',
    fontSize: '1rem',
  };

  const headerColStyle = {
    borderBottom: '1px dashed #ddd',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    textAlign: 'left',
    padding: '10px',
  };

  const leftTitleStyle = {
    background: 'linear-gradient(90deg, #ff7e5f, #feb47b)',
    color: '#fff',
    padding: '15px 0',
    fontWeight: 'bold',
    borderTopLeftRadius: '25px',
    borderBottomLeftRadius: '25px',
    textAlign: 'center',
  };

  const rightTitleStyle = {
    backgroundColor: '#000',
    color: '#fff',
    padding: '15px 0',
    fontWeight: 'bold',
    borderTopRightRadius: '25px',
    borderBottomRightRadius: '25px',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <div style={headingStyle}>THE HAFLA EXPERIENCE</div>
      <div style={subHeadingStyle}>What you get is what you see.</div>

      {/* Table Header */}
      <Row gutter={0} style={{ marginBottom: '20px' }}>
        <Col xs={24} sm={24} md={6}>
          <div style={{ height: '100%' }}></div>
        </Col>
        <Col xs={24} sm={12} md={9}>
          <div style={leftTitleStyle}>THE HAFLA EXPERIENCE</div>
        </Col>
        <Col xs={24} sm={12} md={9}>
          <div style={rightTitleStyle}>A TYPICAL EXPERIENCE</div>
        </Col>
      </Row>

      {/* Table Rows */}
      {[
        {
          label: 'PRICE & QUALITY',
          hafla: ['Trusted partners', 'Competitive prices'],
          typical: ['Uncertain quality', 'Hidden costs'],
        },
        {
          label: 'CONVENIENCE',
          hafla: ['Free event planning consultation', 'Personalized experience'],
          typical: ['Limited inventory', 'Little guidance & support'],
        },
        {
          label: 'CUSTOMER EXPERIENCE',
          hafla: ['Dedicated team for prompt support', 'One stop-shop'],
          typical: ['Time-consuming', 'High friction'],
        },
        {
          label: 'TECH',
          hafla: ['Easy self-checkout', 'One payment method'],
          typical: ['Not easily accessible', 'Lack of smart solutions'],
        },
      ].map((row, index) => (
        <Row key={index} gutter={0} style={rowStyle}>
          <Col xs={24} sm={6} style={headerColStyle}>
            {row.label}
          </Col>
          <Col xs={24} sm={12} md={9}>
            <ul>
              {row.hafla.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Col>
          <Col xs={24} sm={12} md={9}>
            <ul>
              {row.typical.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default HaflaExperience;
