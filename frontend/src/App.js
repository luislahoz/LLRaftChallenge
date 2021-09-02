import React, { Component } from "react";
import Home from "./Components/Home";
import AddOrder from "./Components/AddOrder";
import ViewOrder from "./Components/ViewOrder";
import Table from "./Components/Table";
import DeleteOrder from "./Components/DeleteOrder";
import { Route, BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={AddOrder} />
        <Route exact path="/order" component={ViewOrder} />
        <Route exact path="/orders" component={Table} />
        <Route exact path="/delete" component={DeleteOrder} />
      </Router>
    );
  }
}

export default App;
