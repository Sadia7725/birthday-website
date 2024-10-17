import React from 'react';
import { Row, Col } from 'antd';

const eventCategories = [
  { title: 'WEDDING & ENGAGEMENT', icon: '/images/img7.png' },
  { title: 'CORPORATE EVENTS', icon: '/images/img9.png' },
  { title: 'SOCIAL EVENTS', icon: '/images/social.png' },
  { title: 'KIDS BIRTHDAY', icon: '/images/kids.png' },
];

const browseByCategories = [
  { title: 'EVENT FURNITURE', icon: '/images/img6.png' },
  { title: 'BOUNCY CASTLES', icon: '/images/img3.png' },
  { title: 'KIDS ENTERTAINMENT', icon: '/images/kids.png' },
  { title: 'BALLOON DECOR', icon: '/images/balloon.png' },
  { title: 'PEOPLE & SERVICES', icon: '/images/services.png' },
  { title: 'FOOD & BEVERAGES', icon: '/images/food.png' },
  { title: 'VENUES', icon: '/images/imgpsh_fullsize_anim.png' },
  { title: 'MORE', icon: '/images/more.png' },
];

const EventCategories = () => (
  <div style={styles.container}>
    <h2 style={styles.header}>EVENT CATEGORIES</h2>
    <CategoryGrid categories={eventCategories} />

    <h2 style={styles.header}>BROWSE BY CATEGORY</h2>
    <CategoryGrid categories={browseByCategories} />
  </div>
);

const CategoryGrid = ({ categories }) => (
  <Row
    gutter={{ xs: 8, sm: 16 }} // Adjust gutter based on screen size
    justify="center"
  >
    {categories.map((category, index) => (
      <Col xs={12} sm={6} key={index} style={styles.col}>
        <img src={category.icon} alt={category.title} style={styles.icon} />
        <h3 style={styles.title}>{category.title}</h3>
      </Col>
    ))}
  </Row>
);

const styles = {
  container: {
    padding: '50px',
    textAlign: 'center',
    background: 'linear-gradient(to right, #622774, #F38181)', // Radiant background
    borderRadius: '10px', // Optional: rounded corners
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Optional: shadow for depth
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '20px 0',
    color: 'white',
   
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    width: '100px',
    height: '100px',
    marginBottom: '10px',
  },
  title: {
    fontSize: '18px',
    color: 'white',
    fontWeight: '600',
  },
};

export default EventCategories;
