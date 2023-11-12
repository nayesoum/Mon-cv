import React from 'react';
import { BrowserRouter, Route, Routes, sw } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Competence from './pages/Competence';
import PorteFolio from './pages/PorteFolio';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Mon-cv" exact element={<Home />} />
          <Route path="/Mon-cv/Competence" element={<Competence />} />
          <Route path="/Mon-cv/Portefolio" element={<PorteFolio />} />
          <Route path="/Mon-cv/Contact" element={<Contact />} />
          <Route path="/Mon-cv/*" element={<NotFound />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
