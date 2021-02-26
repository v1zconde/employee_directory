import React from 'react';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Main from "./components/Main";
import './App.css';
//Function App
function App() {
  return (
      <div className="App">
          <Wrapper>
            <Header />
            <Main />
          </Wrapper>
      </div>
  );
}

export default App;
