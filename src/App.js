import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Aboutus from './Components/Aboutus/Aboutus';
import { BrowserRouter as Router, Routes,Route, BrowserRouter } from 'react-router-dom';
import Publications from './Components/Publications/Publications';

function App() {
  return (
    <div className="App no-scrollbar relative">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/Publications' element={<Publications/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
      </Routes>
      </BrowserRouter>
         
    </div>
  );
}

export default App;
