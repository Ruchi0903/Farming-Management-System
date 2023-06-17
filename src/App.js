import './App.css';
import Signup from "./components/Signup"
import Login from "./components/Login"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductListing from './components/ProductListing';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/ProductListing' element={<ProductListing/>} />
      </Routes>
    </Router>
    
    </>
  );
}

export default App;

// Akshay had come in hi!