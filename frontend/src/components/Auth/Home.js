import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* Components */
import Navbar from 'components/Layout/Navbar';
import Footer from 'components/Layout/Footer';
import Message from 'components/Layout/Message';

/* Pages */
import Login from 'components/pags/Auth/Login';
import Register from 'components/pags/Auth/Register';
import Home from 'components/pags/Home';
import Container from 'components/Layout/Container';
import Profile from 'components/pags/User/Profile';

/* Context */
import { UserProvider } from 'context/UserContext';

function App() {
  return (
    <Router>
      <UserProvider>
        <Navbar />
        <Message />
        <Container>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user/profile" element={<Profile />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
        <Footer />
      </UserProvider>
    </Router>
  );
}

export default App;
