import React from 'react';
import './App.css';
import {TaskListContainer} from "./Components";
import {ApolloProvider} from "@apollo/client";
import {client} from "./client";

function App() {
  return (
      <ApolloProvider client={client}>
    <div className="App">
        <TaskListContainer />
    </div>
      </ApolloProvider>
  );
}

export default App;
