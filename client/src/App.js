import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import TodoList from "./components/TodoList";

import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Multi Container React - Node - Mongoose - Nginx</h1>
      </header>
      <QueryClientProvider client={queryClient}>
        <TodoList />
      </QueryClientProvider>
    </div>
  );
}

export default App;
