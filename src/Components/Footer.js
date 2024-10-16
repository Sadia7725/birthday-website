import React from 'react';
import { Row, Col } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faYoutube, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <Row style={styles.content}>
  
        <Col xs={24} sm={24} md={6} style={styles.logoSection}>
          <h2 style={styles.logo}>hafla</h2>
          <p style={styles.tagline}>Events Simplified</p>
          <div style={styles.socialIcons}>
            <FontAwesomeIcon icon={faLinkedin} style={styles.icon} />
            <FontAwesomeIcon icon={faYoutube} style={styles.icon} />
            <FontAwesomeIcon icon={faFacebook} style={styles.icon} />
            <FontAwesomeIcon icon={faInstagram} style={styles.icon} />
            <FontAwesomeIcon icon={faTwitter} style={styles.icon} />
          </div>
        </Col>
        <Col xs={24} sm={24} md={6} style={styles.column}>
          <h3 style={styles.columnTitle}>COMPANY</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>About Hafla</li>
            <li style={styles.listItem}>Blog</li>
            <li style={styles.listItem}>Contact Us</li>
          </ul>
        </Col>
        <Col xs={24} sm={24} md={6} style={styles.column}>
          <h3 style={styles.columnTitle}>EXPLORE</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>Home</li>
            <li style={styles.listItem}>Corporate Events</li>
            <li style={styles.listItem}>Weddings & Engagements</li>
            <li style={styles.listItem}>Other Events</li>
          </ul>
        </Col>
        <Col xs={24} sm={24} md={6} style={styles.column}>
          <h3 style={styles.columnTitle}>POLICY</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>Terms & Conditions</li>
            <li style={styles.listItem}>Privacy Policy</li>
            <li style={styles.listItem}>Acceptable Use Policy</li>
          </ul>
        </Col>
      </Row>
      <Row justify="center" style={{
    borderTop: '1px solid #444',
    marginTop: '30px',
    paddingTop: '20px',
  }}>
        <Col>
          <p style={
 {
    color: '#777',
    fontSize: '14px',
    textAlign: 'center',
  }}>© 2024 Hafla. All rights reserved.</p>
        </Col>
      </Row>
     
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#1c1c1c',
    padding: '50px 20px',
    color: '#fff',
  },
  content: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  logoSection: {
    textAlign: 'left',
    marginBottom: '30px',
    paddingLeft: '20px', 
  },
  logo: {
    color: '#f46f52',
    fontSize: '28px',
    margin: 0,
  },
  tagline: {
    color: '#ccc',
    fontSize: '16px',
    marginBottom: '20px',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'flex-start',
    gap: '20px',
    marginTop: '20px',
  },
  icon: {
    fontSize: '24px',
    color: '#fff',
    transition: 'color 0.3s',
    cursor: 'pointer',
  },
  column: {
    marginBottom: '30px',
    textAlign: 'left',
    paddingLeft: '20px', 
  },
  columnTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: '15px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    color: '#ccc',
    marginBottom: '10px',
  },
  
};

export default Footer;
