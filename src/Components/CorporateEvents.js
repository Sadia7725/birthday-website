import React from 'react';
import { Row, Col, Button, Card } from 'antd';

const CorporateEvents = () => {
  const eventData = [
    {
      key: 1,
      imageSrc: "/images/diwali-collection.jpeg",
      title: "Catering & Entertainment",
    },
    {
      key: 2,
      imageSrc: "/images/halloween-collection.jpeg",
      title: "Equipment & Furniture",
    },
    {
      key: 3,
      imageSrc: "/images/kids-birthdays-thumb.jpg",
      title: "Decorations & Setup",
    },
  ];

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>
        Book everything you need for your business events.
      </h2>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px' }}>
        CORPORATE EVENTS <span style={{ color: 'linear-gradient(to right, orange, pink)' }}>—</span>
      </h1>
      <Button
        type="primary"
        size="large"
        style={{
          background: 'linear-gradient(to right, orange, pink)',
          border: 'none',
          borderRadius: '20px',
          padding: '0 40px',
          marginBottom: '40px',
        }}
      >
        CONSULT EVENT EXPERT
      </Button>
      <Row gutter={[16, 16]} justify="center">
        {eventData.map(event => (
          <Col
            key={event.key}
            xs={24}  // Full width on extra-small screens
            sm={12} // Half width on small screens
            md={8}  // One-third width on medium screens
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <Card
              hoverable
              cover={
                <img
                  alt={event.title}
                  src={event.imageSrc}
                  style={{ 
                    borderRadius: '50% 50% 0 0', 
                    height: '300px', 
                    width: '100%', 
                    objectFit: 'cover',
                    backgroundColor: '#ddd',
                  }}
                />
              }
              style={{
                width: '100%',
                maxWidth: '350px',
                borderRadius: '50% 50% 0 0',
                textAlign: 'center',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>{event.title}</h3>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CorporateEvents;
