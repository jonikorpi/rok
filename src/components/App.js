import React, { Component } from "react";

class App extends Component {
  render() {
    const panelCount = 3;

    return (
      <div className="panels" style={{ "--panel-count": panelCount }}>
        {[...Array(panelCount)].map((value, index) => (
          <article className="panel" style={{ "--order": index }}>
            <div className="scrollable">
              <h1>panel</h1>
            </div>
          </article>
        ))}
      </div>
    );
  }
}

export default App;
