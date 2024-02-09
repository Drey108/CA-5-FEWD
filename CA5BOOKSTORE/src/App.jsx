import React from "react";
import Header from './Heading.jsx';
import Home from "./pages/Home.jsx"
import RegistrationForm from "./pages/RegistrationForm";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration-form" element={<RegistrationForm />} />
        </Routes>
      </div>
    </>
  )
}

export default App