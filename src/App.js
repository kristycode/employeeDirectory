import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from "./pages/Index";
import './index.css';

export default function App() {
  return (
    <Router>
      <div>
          <Route exact path="./" component={Index} />
      </div>
    </Router>

  );
}
