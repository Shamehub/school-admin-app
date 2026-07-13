import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Container, Button } from 'react-bootstrap';
import './Navbar.css';

function NavbarComponent({ user, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <Navbar bg="dark" expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand href="/" className="fw-bold">
          📚 School Admin
        </Navbar.Brand>
        <div className="ms-auto d-flex align-items-center">
          <span className="text-white me-3">Welcome, {user?.name || 'Admin'}</span>
          <Button variant="outline-light" size="sm" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
