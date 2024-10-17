import React from 'react';
import { Row, Col, Button } from 'antd';

const trendingCollections = [
  {
    title: 'Wedding Collection',
    img: '/images/wedding.jpg',
  },
  {
    title: 'Halloween Collection',
    img: '/images/hallowen.jpg',
  },
  {
    title: 'Diwali Collection',
    img: '/images/diwali-collection.jpeg',
  },
];

const TrendingCollections = () => {
  return (
    <div style={styles.container}>
      <h4 style={styles.subheading}>Our top picks for the season.</h4>
      <h2 style={styles.heading}>TRENDING COLLECTIONS</h2>
      <Button style={styles.buttonStyle}>VIEW ALL</Button>
      <Row gutter={[24, 24]} justify="center">
        {trendingCollections.map((collection, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <div style={styles.card}>
              <img
                src={collection.img}
                alt={collection.title}
                style={styles.image}
              />
              <h3 style={styles.title}>{collection.title}</h3>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

const styles = {
  container: {
    padding: '60px',
    textAlign: 'center',
    background: 'linear-gradient(to right, #7117EA, #EA6060)', // Radiant background
    borderRadius: '10px', // Optional: to give a rounded corner effect
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Optional: shadow for depth
  },
  subheading: {
    fontSize: '16px',
    color: '#FFF',
  },
  heading: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#FFF',
  },
  card: {
    backgroundColor: 'linear-gradient(90deg, #ff7e5f, #feb47b)',
    padding: '15px',
    borderRadius: '10px', // Rounded corners for the card
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Shadow for card
    textAlign: 'center',
  },
  image: {
    width: '80%',
    height: '40vh',
    borderRadius: '10px', // Rounded corners for the image
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  buttonStyle: {
    background: 'linear-gradient(90deg, #ff7e5f, #feb47b)',
    border: 'none',
    color: '#fff',
    borderRadius: '20px',
    marginBottom: '30px',
  },
  title: {
    fontSize: '18px',
    fontWeight: '600',
    marginTop: '10px',
    color: '#FFF',
  },
  buttonContainer: {
    marginTop: '20px',
  },
  viewAllButton: {
    background: 'linear-gradient(to right, #ff7f50, #ff6347)',
    border: 'none',
    borderRadius: '20px',
    color: '#fff',
    padding: '10px 20px',
    fontSize: '16px',
  },
};

export default TrendingCollections;
