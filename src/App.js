import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://django-backend-sqlite.herokuapp.com/bucketlists/'
fetch(proxyUrl + targetUrl)
  .then(blob => blob.json())
  .then(data => {
    console.log(data);
  this.setState({
    data: data
  })
  })
  .catch(e => {
    console.log(e);
    return e;
  });
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
