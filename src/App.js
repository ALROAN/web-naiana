import React from 'react';
import './App.css';
import { Header, Footer } from "./components/IndexComponents"
import { contacteBody, presentacioBody, recursosBody, tallersXerradesBody, terapiaInfantilBody, terapiaIndividualBody } from "./bodies/IndexBodies"
import {
  BrowserRouter as Router,

  Route,

} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <div>

          <div className="views">
            <Route exact path="/Contacte" component={contacteBody} />
            <Route path="/Recursos" component={recursosBody} />
            <Route path="/Presentacio" component={presentacioBody} />
            <Route path="/TallersXerrades" component={tallersXerradesBody} />
            <Route path="/TerapiaIndividual" component={terapiaIndividualBody} />
            <Route path="/TerapiaInfantil" component={terapiaInfantilBody} />
          </div>

        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
