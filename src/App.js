import React, { Component } from "react";
import { MessageList } from "./containers/MessageList"
import { Sidebar } from "./containers/Sidebar"
import { AddMessage } from "./containers/AddMessage"
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Sidebar />
        <section id="main">
          <MessageList />
          <AddMessage />
        </section>
      </div>
    );
  }
}

export default App;