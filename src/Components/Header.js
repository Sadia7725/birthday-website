
import React from 'react';
import { Row, Col } from 'antd';

const Header = () => {
  return (
    <header style={styles.header}>
      <Row justify="space-between" align="middle" style={styles.row}>
        <Col>
          <h1 style={styles.title}>Birthday Celebrations</h1>
        </Col>
        <Col>
          <nav>
            <ul style={styles.nav}>
              <li style={styles.navItem}>Home</li>
              <li style={styles.navItem}>About</li>
              <li style={styles.navItem}>Events</li>
              <li style={styles.navItem}>Contact</li>
            </ul>
          </nav>
        </Col>
      </Row>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#f5a623',
    padding: '10px 20px',
    borderBottom: '2px solid #e67e22',
    color: 'white',
    textAlign: 'center',
  },
  row: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    margin: 0,
    fontSize: '24px',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: '0 15px',
    cursor: 'pointer',
    color: '#fff',
    fontSize: '16px',
  },
};

export default Header;
