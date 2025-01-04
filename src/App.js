import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Aboutus from './Components/Aboutus/Aboutus';
import { BrowserRouter as Router, Routes,Route, BrowserRouter } from 'react-router-dom';
// import Publications from './Components/Publications/Publications';
import ServicesPage from './Components/Services/Services.jsx';
import ContactUs from './Components/Contactus/Contactus.jsx';
import Scrolltop from './Components/Scrolltop/Scrolltop.jsx';
import Footer from './Components/Footer/Footer.jsx';
import CorpSocialResp from './Components/Aboutus/CorpSocialResp.jsx';
import AboutPublications from './Components/Publications/AboutPublications.jsx';
import JournalsList from './Components/Publications/JournalsList.jsx';
import SubmitArticles from './Components/Publications/SubmitArticles.jsx';
import CallForPaper from './Components/Publications/CallForPaper.jsx';
import PrivacyPolicy from './Components/Publications/PrivacyPolicy.jsx';
import RefundPolicy from './Components/Publications/RefundPolicy.jsx';
import JournalDetail from './Components/Publications/JournalDetail.jsx';

function App() {
  return (
    <div className="App no-scrollbar ">
      
      <BrowserRouter>
      <Scrolltop/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<ServicesPage/>}/>
        {/* <Route path='/Publications' element={<Publications/>}/> */}
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/corporate-social-responsibility' element={<CorpSocialResp/>}/>
        <Route path='/about-publication' element={<AboutPublications/>}/>
        <Route path='/journals' element={<JournalsList/>}/>
        {/* <Route path='/submit-articles' element={<SubmitArticles/>}/> */}
        <Route path='/call-for-paper' element={<CallForPaper/>}/>
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
        <Route path='/refund-policy' element={<RefundPolicy/>}/>
        <Route path='/contactus' element={<ContactUs/>}/> 
         {/* journal details route  */}
        <Route path="/journal/:id" element={<JournalDetail/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
         
    </div>
  );
}

export default App;
