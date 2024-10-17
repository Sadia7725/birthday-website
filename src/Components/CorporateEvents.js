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
      imageSrc: "/images/gettogether.png",
      title: "Equipment & Furniture",
    },
    {
      key: 3,
      imageSrc: "/images/kids-birthdays-thumb.jpg",
      title: "Decorations & Setup",
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.subtitle}>
        Book everything you need for your business events.
      </h2>
      <h1 style={styles.title}>
        CORPORATE EVENTS <span style={styles.separator}>—</span>
      </h1>
      <Button
        type="primary"
        size="large"
        style={styles.button}
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
              style={styles.card}
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
    padding: '20px',
    textAlign: 'center',
    background: 'linear-gradient(to right, #F02FC2, #6094EA)', // Radiant background
    borderRadius: '10px', // Optional: rounded corners
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Optional: shadow for depth
  },
  subtitle: {
    fontSize: '2rem',
    marginBottom: '10px',
    color: 'white',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: 'white',
  },
  separator: {
    color: 'linear-gradient(to right, orange, pink)', // Use gradient for the separator
  },
  button: {
    background: 'linear-gradient(to right, orange, pink)',
    border: 'none',
    borderRadius: '20px',
    padding: '0 40px',
    marginBottom: '40px',
  },
  card: {
    width: '100%',
    maxWidth: '350px',
    borderRadius: '50% 50% 0 0',
    textAlign: 'center',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', 
    background: 'linear-gradient(to right, #F02FC2, #6094EA)',
    
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'white',
  },
};

export default CorporateEvents;
