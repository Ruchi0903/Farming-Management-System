import './App.css';
import Signup from "./components/Signup"
import Login from "./components/Login"
import Home from "./components/Home.jsx"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductListing from './components/ProductListing';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/ProductListing' element={<ProductListing/>} />
      </Routes>
    </Router>
    
    </>
  );
}

export default App;

