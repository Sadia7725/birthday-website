import React from 'react';
import { Row, Col } from 'antd';
const eventCategories = [
  {
    title: 'WEDDING & ENGAGEMENT',
    icon: '/images/img7.png', 
  },
  {
    title: 'CORPORATE EVENTS',
    icon: '/images/img9.png', 
  },
  {
    title: 'SOCIAL EVENTS',
    icon: '/images/im8.png', 
  },
  {
    title: 'KIDS BIRTHDAY',
    icon: '/images/img10.png', 
  },
];

const browseByCategories = [
  {
    title: 'EVENT FURNITURE',
    icon: '/images/img6.png', 
  },
  {
    title: 'BOUNCY CASTLES',
    icon: '/images/img 3.png', 
  },
  {
    title: 'KIDS ENTERTAINMENT',
    icon: '/images/imgpsh_fullsize_anim.png',
  },
  {
    title: 'BALLOON DECOR',
    icon: '/images/whats.png', 
  },
  {
    title: 'PEOPLE & SERVICES',
    icon: '/images/whats.png',
  },
  {
    title: 'FOOD & BEVERAGES',
    icon: '/images/img2.png', 
  },
  {
    title: 'VENUES',
    icon:'/images/imgpsh_fullsize_anim.png', 
  },
  {
    title: 'MORE',
    icon:'/images/whats.png', 
  },
];

const EventCategories = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>EVENT CATEGORIES</h2>
      <Row gutter={[16, 16]} justify="center">
        {eventCategories.map((category, index) => (
          <Col xs={12} sm={6}  key={index} style={styles.col}>
            <img src={category.icon} alt={category.title} style={styles.icon} />
            <h3 style={styles.title}>{category.title}</h3>
          </Col>
        ))}
      </Row>

      <h2 style={styles.header}>BROWSE BY CATEGORY</h2>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} style={styles.browseCol}>
          <Row gutter={[16, 16]} justify="center">
            {browseByCategories.map((category, index) => (
              <Col xs={12} sm={6} key={index} style={styles.col}>
                <img src={category.icon} alt={category.title} style={styles.icon} />
                <h3 style={styles.title}>{category.title}</h3>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};


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
  browseCol: {
    display: 'flex',
    justifyContent: 'center',
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
