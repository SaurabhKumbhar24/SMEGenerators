import React from "react";

import "../styles/App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Terms from "./legal/Terms";
import Error404 from "./Error404";

function App() {

  const homeRef = React.useRef( null );
  const aboutRef = React.useRef( null );
  const productsRef = React.useRef( null );
  const contactRef = React.useRef( null );

  const scrollToRef = (ref) => window.scrollTo({top:ref.current.offsetTop,behavior:'smooth'});

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home homeRef={homeRef} aboutRef={aboutRef} productsRef={productsRef} contactRef={contactRef} scrollToRef={scrollToRef}/>}/>
          <Route path="/tnc" element={<Terms homeRef={homeRef} aboutRef={aboutRef} productsRef={productsRef} contactRef={contactRef} scrollToRef={scrollToRef}/>}/>
          <Route path="*" element={<Error404/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
