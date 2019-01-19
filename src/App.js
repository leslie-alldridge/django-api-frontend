import React, { Component } from "react";
import axios from "axios";

import "./App.css";

class App extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    try {
      axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
      axios.defaults.xsrfCookieName = "csrftoken";
      axios.get("/bucketlists/").then(data => {
        console.log(data);
        
        this.setState({
          data: data.data
        });
      });
    } catch (error) {
      console.error(error);
    }
  }
  render() {
    return (
      <div className="App">
        {this.state.data.map(item => {
          return (
            <p key={item.date_created}>
              {item.name} created on: {item.date_created}
            </p>
          );
        })}
      </div>
    );
  }
}

export default App;
