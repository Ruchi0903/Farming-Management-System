import './App.css';
import Signup from "./components/Signup"
import Login from "./components/Login"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

// Akshay had come in hi!