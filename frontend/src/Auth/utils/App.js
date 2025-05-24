import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from 'Auth/components/pages/login';
import Register from 'Auth/components/pages/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<h1>Home Page</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
