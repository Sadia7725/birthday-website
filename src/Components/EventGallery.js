import React from 'react';
import { Row, Col, Card } from 'antd';

const EventGallery = () => {
  const eventData = [
    {
      key: 1,
      title: 'BABY SHOWER',
      imageSrc: "/images/babyshower.png",
    },
    {
      key: 2,
      title: "KIDS' BIRTHDAYS",
      imageSrc: "/images/kidsbirthday.jpg",
    },
    {
      key: 3,
      title: 'CASUAL GET-TOGETHER',
      imageSrc: "/images/gettogether.png",
    },
    {
      key: 4,
      title: 'CORPORATE EVENTS',
      imageSrc: "/images/corporate.png",
    },
  ];

  return (
    <div style={styles.container}>
      <h3 style={styles.subtitle}>A tour of events we have executed.</h3>
      <h1 style={styles.title}>
        A GLIMPSE INTO OUR EVENTS{' '}
        <span style={styles.separator}>—</span>
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
              style={styles.card} 
              cover={
                <div style={{ position: 'relative',  borderRadius: '10px' }}>
                  <img
                    alt={event.title}
                    src={event.imageSrc}
                    style={{ height: '300px', objectFit: 'cover', borderRadius: '10px' }}
                  />
                </div>
              }
            >
              <h3 style={styles.cardTitle}>{event.title}</h3>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px',
    textAlign: 'center',
    background: 'linear-gradient(to right, #e233ff, #feb47b)', 
  },
  subtitle: {
    fontSize: '18px',
    marginBottom: '10px',
    color:'white',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '30px',
    color:'white',
  },
  separator: {
    borderBottom: '2px solid #FF6347', // Orange separator line
    display: 'inline-block',
    width: '50px',
    marginLeft: '10px',
  },
  card: {
    background: 'linear-gradient(to right, #e233ff, #feb47b)',
    borderRadius: '10px',
    color: 'white', 
  },
  cardTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginTop: '10px',
    textAlign: 'center',
  },
};

export default EventGallery;
