import React from 'react';
import './App.css';
import {ApolloProvider} from "@apollo/client";
import {client} from "./client";
import TaskListContainer from "./Components/TaskListContainer";

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
