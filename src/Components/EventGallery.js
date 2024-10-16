import React from 'react';
import { Row, Col, Card } from 'antd';

const EventGallery = () => {
  const eventData = [
    {
      key: 1,
      title: 'BABY SHOWER',
      imageSrc:  "/images/diwali-collection.jpeg",
    },
    {
      key: 2,
      title: "KIDS' BIRTHDAYS",
      imageSrc: "/images/halloween-collection.jpeg",
    },
    {
      key: 3,
      title: 'CASUAL GET-TOGETHER',
      imageSrc:  "/images/diwali-collection.jpeg",
    },
    {
      key: 4,
      title: 'CORPORATE EVENTS',
      imageSrc:  "/images/diwali-collection.jpeg",
    },
  ];

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>A tour of events we have executed.</h3>
      <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '30px' }}>
        A GLIMPSE INTO OUR EVENTS{' '}
        <span style={{ color: 'linear-gradient(to right, orange, pink)' }}>—</span>
      </h1>
      <Row gutter={[16, 16]} justify="center">
        {eventData.map(event => (
          <Col
            key={event.key}
            xs={24}
            sm={12}
            md={6}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <Card
              hoverable
              cover={
                <div style={{ position: 'relative' }}>
                  <img
                    alt={event.title}
                    src={event.imageSrc}
                    style={{ height: '300px', objectFit: 'cover', borderRadius: '10px' }}
                  />
                
                </div>
              }
           
            >
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginTop: '10px' }}>
                {event.title}
              </h3>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default EventGallery;
