import React, { Suspense } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Lazy loading of components
const Home = React.lazy(() => import('./Components/Home/Home'));
const ServicesPage = React.lazy(() => import('./Components/Services/Services.jsx'));
const Aboutus = React.lazy(() => import('./Components/Aboutus/Aboutus'));
const CorpSocialResp = React.lazy(() => import('./Components/Aboutus/CorpSocialResp.jsx'));
const AboutPublications = React.lazy(() => import('./Components/Publications/AboutPublications.jsx'));
const JournalsList = React.lazy(() => import('./Components/Publications/JournalsList.jsx'));
const CallForPaper = React.lazy(() => import('./Components/Publications/CallForPaper.jsx'));
const PrivacyPolicy = React.lazy(() => import('./Components/Publications/PrivacyPolicy.jsx'));
const RefundPolicy = React.lazy(() => import('./Components/Publications/RefundPolicy.jsx'));
const ContactUs = React.lazy(() => import('./Components/Contactus/Contactus.jsx'));
const JournalDetail = React.lazy(() => import('./Components/Publications/JournalDetail.jsx'));
const Scrolltop = React.lazy(() => import('./Components/Scrolltop/Scrolltop.jsx'));
const Footer = React.lazy(() => import('./Components/Footer/Footer.jsx'));
const Assistant = React.lazy(() => import('./Components/FixedContact/Assistant.jsx'));

function App() {
  return (
    <div className="App no-scrollbar">
      <Suspense fallback={<div>Loading...</div>}>
        <Router basename={process.env.PUBLIC_URL}>
          <Scrolltop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/corporate-social-responsibility" element={<CorpSocialResp />} />
            <Route path="/about-publication" element={<AboutPublications />} />
            <Route path="/journals" element={<JournalsList />} />
            <Route path="/call-for-paper" element={<CallForPaper />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/journal/:id" element={<JournalDetail />} />
          </Routes>
          <Assistant />
          <Footer />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
