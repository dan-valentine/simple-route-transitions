import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";

export default class Routes extends Component {
  constructor() {
    super();
    this.state = {
      style: {
        height: "0px"
      }
    };
    this.setHeight = this.setHeight.bind(this);
  }

  setHeight(height) {
    this.setState({
      style: {
        height: height
      }
    });
  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/"
            render={_ => (
              <div className="route-container" style={this.state.style}>
                <Switch>
                  <Route path="/about" render={_=> <About setHeight={this.setHeight}/>} />
                  <Route path="/products" render={_=> <Products setHeight={this.setHeight}/>} />
                </Switch>
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}
