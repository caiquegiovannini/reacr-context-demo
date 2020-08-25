import React, { useContext } from 'react';

import Button from '@material-ui/core/Button';

import { useSetSnackbar } from '../hooks/useSnackbar';

const Content = () => {
  const setSnackbar = useSetSnackbar();

  const handleClick = (type) => {
    setSnackbar(`Message test ${type}`, type);
  };

  console.log('Content re-render');

  return (
    <div>
      <Button
        onClick={() => {
          handleClick('success');
        }}
      >
        Open success snackbar
      </Button>
      <Button
        onClick={() => {
          handleClick('error');
        }}
      >
        Open error snackbar
      </Button>
      <Button
        onClick={() => {
          handleClick('info');
        }}
      >
        Open info snackbar
      </Button>
      <Button
        onClick={() => {
          handleClick('warning');
        }}
      >
        Open warning snackbar
      </Button>
    </div>
  );
};

export default Content;
