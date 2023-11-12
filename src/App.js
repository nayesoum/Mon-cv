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
          <Route path="/" exact element={<Home />} />
          <Route path="Competence" element={<Competence />} />
          <Route path="Portefolio" element={<PorteFolio />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
