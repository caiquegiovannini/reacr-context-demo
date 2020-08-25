import React from 'react';

import { SnackbarContainer } from './context/SnackbarContext';

import Content from './components/Content';
import Snackbar from './components/Snackbar';

function App() {
  return (
    <SnackbarContainer>
      <div className="App">
        <Content />
        <Snackbar />
      </div>
    </SnackbarContainer>
  );
}

export default App;
