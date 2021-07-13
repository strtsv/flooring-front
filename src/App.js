import React from "react";
import { Route, Switch } from "react-router-dom";

import "./assets/css/style.css";
import "./assets/css/bootstrap.css";
import "./assets/css/fonts.css";

import SingleItem from "./pages/SingleItem";
// import About from "./pages/About";
// import Products from "./pages/Products";
// import News from "./pages/News";
// import Contacts from "./pages/Contacts";
// import Privacy from "./pages/Privacy";

function App() {
  return (
    <Switch>
      {/* <Route exact path="/index-1.html" component={About} /> */}
      {/* <Route exact path="/index-2.html" component={Contacts} /> */}
      {/* <Route exact path="/index-3.html" component={News} /> */}
      {/* <Route exact path="/index-4.html" component={Products} /> */}
      <Route exact path="/index.html" component={SingleItem} />
      <Route exact path="/" component={SingleItem} />
    </Switch>
  );
}

export default App;
