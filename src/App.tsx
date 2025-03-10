import React from 'react';
import './App.css';
import Intro from './components/intro/intro';
import { ThemeProvider } from './common/Theme';

function App() {
  return (
    <>
      <ThemeProvider>
        <Intro />
      </ThemeProvider>
    </>
  );
}

export default App;