import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/homepage";
import SignupForm from "./components/signup"; // Import SignUp component
import Drivers from "./components/drivers"; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Set HomePage as the default landing page */}
        <Route path="/" element={<HomePage />} />
        {/* Add SignUp page route */}
        <Route path="/signup" element={<SignupForm />} />

        <Route path="/drivers" element={<Drivers/>} />
      </Routes>
    </Router>
  );
}

export default App;
