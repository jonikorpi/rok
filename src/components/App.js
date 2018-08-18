import React, { Component } from "react";

class App extends Component {
  render() {
    const panelCount = 5;

    return (
      <div className="panels" style={{ "--panel-count": panelCount }}>
        {[...Array(panelCount)].map((value, index) => (
          <article className="panel" key={index} style={{ "--order": index }}>
            <div className="scrollable">
              {[...Array(Math.floor(Math.random() * 1000))].map(() => (
                <h1>{Math.random()}</h1>
              ))}
            </div>
          </article>
        ))}
      </div>
    );
  }
}

export default App;
