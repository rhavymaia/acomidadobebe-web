import './App.css';

import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home/index.js'
import Cards from './pages/Cards/index.js';
import Ingredientes from './pages/Ingredientes/index.js';

import Perfil from "../src/imagens/perfil.jpg";

function App() {
  return (
    <BrowserRouter>
      {[false,].map((expand) => (
        <Navbar key={expand} bg="dark" variant="dark" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="/">Logozinha</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton className="offcanvas-header">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className="header">
                  <h4 className='head'></h4>
                  <img className='avatar' src={Perfil} alt='boy' />
                  <h4 className='name'>Fulano da Silva</h4>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>

                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                      <span className="horizontal"> </span>
                      <Nav.Link as={Link} to="/">Home</Nav.Link>
                      <span className="horizontal"> </span>
                      <Nav.Link as={Link} to="/cards">Cards</Nav.Link>
                      <span className="horizontal"> </span>
                      <Nav.Link as={Link} to="/ingredientes">Ingredientes</Nav.Link>
                      <span className="horizontal"> </span>
                    </Nav>
                  </Navbar.Collapse>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/ingredientes" element={<Ingredientes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
