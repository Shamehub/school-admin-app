import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Card } from 'react-bootstrap';
import './Dashboard.css';

function Dashboard() {
  const [stats, setStats] = useState({
    students: 0,
    teachers: 0,
    classes: 0,
    schedules: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      const token = localStorage.getItem('token');
      try {
        const [studentsRes, teachersRes, classesRes, schedulesRes] = await Promise.all([
          axios.get(`${process.env.REACT_APP_API_URL}/students`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get(`${process.env.REACT_APP_API_URL}/teachers`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get(`${process.env.REACT_APP_API_URL}/classes`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
          axios.get(`${process.env.REACT_APP_API_URL}/schedules`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        setStats({
          students: studentsRes.data.data.length,
          teachers: teachersRes.data.data.length,
          classes: classesRes.data.data.length,
          schedules: schedulesRes.data.data.length,
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="dashboard">
      <h1 className="mb-4">Dashboard</h1>
      <Row>
        <Col md={6} lg={3} className="mb-3">
          <Card className="stat-card">
            <Card.Body>
              <h5>Total Students</h5>
              <h2 className="text-primary">{stats.students}</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mb-3">
          <Card className="stat-card">
            <Card.Body>
              <h5>Total Teachers</h5>
              <h2 className="text-success">{stats.teachers}</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mb-3">
          <Card className="stat-card">
            <Card.Body>
              <h5>Total Classes</h5>
              <h2 className="text-warning">{stats.classes}</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mb-3">
          <Card className="stat-card">
            <Card.Body>
              <h5>Total Schedules</h5>
              <h2 className="text-danger">{stats.schedules}</h2>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
