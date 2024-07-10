
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';


function App() {
  return (
    <div>
    <Routes>

      <Route index element={<Home />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/services" element={<Services />}/>
      <Route path="/contact" element={<Contact />}/>

    </Routes>

    </div>
    
  );
}

export default App;
