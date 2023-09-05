import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./home/home";
import Loading from "./landing_page/loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          {/* Route for the loading screen */}
          <Route path="/loading">
            {loading ? <Loading /> : <Redirect to="/home" />}
          </Route>

          {/* Route for the home page */}
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
