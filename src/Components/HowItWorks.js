import React from 'react';
import { Row, Col, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';

const HowItWorks = () => {
  return (
    <div style={styles.container}>
      {/* Heading Section */}
      <h2 style={styles.heading}>HOW DOES IT WORK</h2>
      <p style={styles.subheading}>it’s pretty simple!</p>

      {/* Steps Section */}
      <Row justify="center" align="middle" style={styles.stepsRow}>
        {steps.map((step, index) => (
          <Col key={index} xs={24} sm={6} style={styles.stepCol}>
            <div style={styles.stepCircle}>{index + 1}</div>
            <p style={styles.stepText}>{step}</p>
          </Col>
        ))}
      </Row>

      {/* Next Button */}
      <Button
        type="primary"
        shape="circle"
        icon={<RightOutlined />}
        size="large"
        style={styles.nextButton}
      />
    </div>
  );
};

const steps = ['Get Inspired', 'Consult with Experts', 'Book your Hafla', 'Celebrate!'];

const styles = {
  container: {
    textAlign: 'center',
    padding: '40px 20px',
    backgroundColor: '#f8f8f8',
  },
  heading: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '8px',
  },
  subheading: {
    fontSize: '16px',
    color: '#999',
    marginBottom: '40px',
  },
  stepsRow: {
    marginBottom: '40px',
  },
  stepCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  stepCircle: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: 'linear-gradient(45deg, #ff7e5f, #feb47b)',
    color: '#fff',
    fontSize: '20px',
    lineHeight: '50px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  stepText: {
    fontSize: '14px',
    color: '#333',
  },
  nextButton: {
    position: 'absolute',
    right: '15px',
    top: '50%',
    transform: 'translateY(-50%)',
  },
};

export default HowItWorks;
