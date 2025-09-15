import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ServicesSection from "./components/ServicesSection";
import Works from "./components/Works";
import Contact from "./pages/Contact";  
import FAQs from "./pages/FAQs";
import Reimbursements from "./pages/Reimbursements";
import Pricing from "./pages/Pricing";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";






const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesSection />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />   
          <Route path="/faqs" element={<FAQs />} /> 
          <Route path="/reimbursements" element={<Reimbursements />} />  
          <Route path="/pricing" element={<Pricing />} />  
          <Route path="/privacy" element={<Privacy />} /> 
         <Route path="/terms" element={<Terms />} />  
 





        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
