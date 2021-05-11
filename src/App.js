import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Projects, About, Contact } from "./components";
import './App.css';
import './App-Mobile.css'


function App() {
  return (
    <div className="App">

      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <About />} />
          <Route path="/projects" exact component={() => <Projects />} />
          <Route path="/contact" exact component={() => <Contact />} />
        </Switch>
        <Footer />
      </Router>
      
    

    </div>
  );
}

export default App;
