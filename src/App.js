import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Header from "./companents/Header";
import AddIceCream from "./pages/AddIceCream";
import NotFound from "./pages/NotFound";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/AddIceCream">
            <AddIceCream />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
      <ToastContainer />
    </Router>
  );
}

export default App;