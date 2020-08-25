import React, { createContext, useState, memo } from 'react';

export const SnackbarValueContext = createContext({});
export const SnackbarSetContext = createContext(() => {});

const SnackbarProvider = memo(({ setSnackbar, children }) => {
  console.log('SnackbarProvider refresh');

  const handleSncakbarSet = (message, type = 'default') => {
    setSnackbar({
      message,
      type,
    });
  };

  return (
    <SnackbarSetContext.Provider value={handleSncakbarSet}>
      {children}
    </SnackbarSetContext.Provider>
  );
});

export const SnackbarContainer = ({ children }) => {
  const [snackbar, setSnackbar] = useState({
    message: '',
    type: 'default',
  });

  return (
    <SnackbarValueContext.Provider value={snackbar}>
      <SnackbarProvider setSnackbar={setSnackbar}>{children}</SnackbarProvider>
    </SnackbarValueContext.Provider>
  );
};
