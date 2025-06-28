import './App.css';
import React, {} from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Origo from './pages/Origo';
import Tuneblr from './pages/Tuneblr';
import IdagInatt from './pages/IdagInatt';
import Eli from './pages/Eli';
import Discogs from './pages/Discogs';
import Forgetmenot from './pages/Forgetmenot';
import HandwrittenDigits from './pages/HandwrittenDigits';
import BrainfuncBeats from './pages/BrainfuncBeats';

const App = () => {
  return (
    <div className="container">
      <CustomCursor />
      <HelmetProvider>
        <Helmet>
          <title>Tyra Wodén | Portfolio</title>
          <meta charSet="UTF-8" />
          <meta name="author" content="Tyra Wodén" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet>
      </HelmetProvider>

      <Router basename='/id21twn'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/origo" element={<Origo />} />
          <Route path="/tuneblr" element={<Tuneblr />} />
          <Route path="/idaginatt" element={<IdagInatt />} />
          <Route path="/eli" element={<Eli />} />
          <Route path="/discogs" element={<Discogs />} />
          <Route path="/forgetmenot" element={<Forgetmenot />} />
          <Route path="/handwritten_digits" element={<HandwrittenDigits />} />
          <Route path="/brainfunc_beats" element={<BrainfuncBeats />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
