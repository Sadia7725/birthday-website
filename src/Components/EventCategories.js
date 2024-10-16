import React from 'react';
import { Row, Col } from 'antd';

const eventCategories = [
  { title: 'WEDDING & ENGAGEMENT', icon: '/images/img7.png' },
  { title: 'CORPORATE EVENTS', icon: '/images/img9.png' },
  { title: 'SOCIAL EVENTS', icon: '/images/social.jfif' },
  { title: 'KIDS BIRTHDAY', icon: '/images/kids.jpg' },
];

const browseByCategories = [
  { title: 'EVENT FURNITURE', icon: '/images/img6.png' },
  { title: 'BOUNCY CASTLES', icon: '/images/img 3.png' },
  { title: 'KIDS ENTERTAINMENT', icon: '/images/kids.png' },
  { title: 'BALLOON DECOR', icon: '/images/balloon.png' },
  { title: 'PEOPLE & SERVICES', icon: '/images/services.png' },
  { title: 'FOOD & BEVERAGES', icon: '/images/food.png' },
  { title: 'VENUES', icon: '/images/imgpsh_fullsize_anim.png' },
  { title: 'MORE', icon: '/images/whats.png' },
];

const EventCategories = () => {
  return (
    <div style={styles.container}>
      {/* Event Categories Section */}
      <h2 style={styles.header}>EVENT CATEGORIES</h2>
      <CategoryGrid categories={eventCategories} />

      {/* Browse by Categories Section */}
      <h2 style={styles.header}>BROWSE BY CATEGORY</h2>
      <CategoryGrid categories={browseByCategories} />
    </div>
  );
};

// Reusable Category Grid Component
const CategoryGrid = ({ categories }) => (
  <Row gutter={[16, 16]} justify="center">
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
    padding: '20px',
    textAlign: 'center',
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '20px 0',
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  icon: {
    width: '100px',
    height: '100px',
    marginBottom: '10px',
  },
  title: {
    fontSize: '18px',
    fontWeight: '600',
  },
};

export default EventCategories;
