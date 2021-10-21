import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Header from "./companents/Header";
import AddIceCream from "./pages/AddIceCream";
import './App.css';

function App() {
  return (
    <Router>
      <div className="wrapper">
      <Header />
      <Switch>
        <Route path="/AddIceCream">
          <AddIceCream />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;