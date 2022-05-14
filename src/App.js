import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Navbar from "./components/layout/Navbar";
import EditForm from "./components/notes/EditForm";
import Favorites from "./components/notes/Favorites";
import NoteDetail from "./components/notes/NoteDetail";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/favorites" component={Favorites} />
        <Route path='/note/:id' component={NoteDetail} />
        <Route path='/editform/:id' component={EditForm} />
      </Switch>
    </Router>
  );
}

export default App;
