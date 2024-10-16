import React from 'react';
import { Row, Col } from 'antd';

const clients = [
  { name: 'TikTok', logo: '/images/tiktoklogo.png' },
  { name: 'Talabat', logo: '/images/tiktoklogo.png' },
  { name: 'Emaar', logo: '/images/provis.png'},
  { name: 'Expo 2020', logo: '/images/provis.png' },
  { name: 'GEMS Rewards', logo: '/images/provis.png' },
  { name: 'ITP Publishing', logo: '/images/provis.png' },
  { name: 'McKinsey', logo: '/images/provis.png' },
  { name: 'Carrefour', logo: '/images/tiktoklogo.png' },
  { name: 'Nakheel', logo: '/images/tiktoklogo.png' },
  { name: 'Provis', logo: '/images/provis.png' },
  { name: 'Abu Dhabi Global Market', logo: '/images/provis.png' },
  { name: 'ADNOC', logo: '/images/tiktoklogo.png' },
];

const ClientsSection = () => {
  const containerStyle = {
    padding: '50px 20px',
    textAlign: 'center',
    backgroundColor: '#fff',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
  };

  const subHeadingStyle = {
    fontSize: '1rem',
    color: '#888',
    marginBottom: '40px',
  };

  const logoStyle = {
    maxWidth: '150px',
    margin: 'auto',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>WE LOVE OUR CLIENTS</h2>
      <p style={subHeadingStyle}>and they love us too!</p>

      <Row gutter={[16, 16]} justify="center">
        {clients.map((client, index) => (
          <Col xs={12} sm={8} md={6} lg={4} key={index} style={{ textAlign: 'center' }}>
            <img src={client.logo} alt={client.name} style={logoStyle} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ClientsSection;
