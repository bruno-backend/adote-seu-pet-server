import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import React from 'react'

/* Components */
import Navbar from "frontend/src/components/Layout/Navbar"
import Footer from "frontend/src/components/Layout/Footer"
import Message from "frontend/src/components/Layout/Message"


/*  pages */
import Login from 'frontend/src/components/pags/Auth/login'
import Register from 'frontend/src/components/pags/Auth/Register'
import Home from 'frontend/src/components/pags/Home'
import Container from "frontend/src/components/Layout/Container"
import Profile from "frontend/src/components/pags/User/Profile"

/* context */
import { UserProvider } from "frontend/src/context/UserContext"

function App() {

  return (
    <Router>
      <UserProvider>
      <Navbar />
      <Message />
      <Container>
      <Routes>

        <Route path="/login" element={<Login/>} >
        </Route>

        <Route path="/register" element={<Register/>}>
        </Route>

        <Route path="/user/profile" element={<Profile/>}>
        </Route>

        <Route path="/" element={<Home/>}>
        </Route>

      </Routes>
      </Container>
      <Footer />
      </UserProvider>
    </Router>
  )
}

export default App
