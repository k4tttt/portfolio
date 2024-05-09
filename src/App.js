import './App.css';
import React, {} from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './components/Home';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Origo from './components/Origo';
import Tuneblr from './components/Tuneblr';
import IdagInatt from './components/IdagInatt';
import Eli from './components/Eli';
import Discogs from './components/Discogs';
import Forgetmenot from './components/Forgetmenot';
import HandwrittenDigits from './components/HandwrittenDigits';

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
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
