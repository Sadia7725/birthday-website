import React from 'react';
import { Row, Col, Card, Button } from 'antd';

const TrendingCollections = () => {
  const sectionStyle = {
    padding: '40px',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const subtitleStyle = {
    fontSize: '1em',
    color: '#666',
    marginBottom: '30px',
  };

  const buttonStyle = {
    background: 'linear-gradient(90deg, #ff7e5f, #feb47b)',
    border: 'none',
    color: '#fff',
    borderRadius: '20px',
    marginBottom: '30px',
  };

  const cardStyle = {
    borderRadius: '50% 50% 0 0', 
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    width: '100%',
    backgroundColor: '#ddd',
    maxWidth: '350px',
    height: '360px',
  };

  const collections = [
    {
      title: 'Wedding Collection',
      image: '/images/WEDDING3_9990.jpeg',
    },
    {
      title: 'Halloween Collection',
      image: '/images/halloween-collection.jpeg',
    },
    {
      title: 'Diwali Collection',
      image: '/images/WEDDING3_9990.jpeg',
    },
  ];

  return (
    <div style={sectionStyle}>
      <div style={subtitleStyle}>Our top picks for the season.</div>
      <div style={titleStyle}>TRENDING COLLECTIONS</div>
      <Button style={buttonStyle}>VIEW ALL</Button>
      <Row gutter={[16, 16]} justify="center">
        {collections.map((collection) => (
          <Col 
            xs={24}  // Full width on extra-small screens
            sm={12}  // Half width on small screens
            md={8}   // One-third width on medium screens
            key={collection.title}
            style={{ display: 'flex', justifyContent: 'center' }} // Center cards on smaller screens
          >
            <Card
              hoverable
              cover={
                <img 
                  alt={collection.title} 
                  src={collection.image} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover' 
                  }} 
                />
              }
              style={cardStyle}
            >
              <Card.Meta 
                title={collection.title} 
                style={{ 
                  textAlign: 'center', 
                  fontWeight: 'bold' 
                }} 
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TrendingCollections;
