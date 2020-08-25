import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { green, pink, blue, amber } from '@material-ui/core/colors';

import { useSnackbar } from '../hooks/useSnackbar';

const useStyles = makeStyles((theme) => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: pink[600],
  },
  info: {
    backgroundColor: blue[600],
  },
  warning: {
    backgroundColor: amber[700],
  },
  close: {
    padding: theme.spacing(0.5),
  },
}));

export default function SimpleSnackbar() {
  const classes = useStyles();
  const { snackbar, setSnackbar } = useSnackbar();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbar('');
  };

  const { message, type } = snackbar;

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={!!message}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <SnackbarContent
          className={classes[type]}
          message={message ? <span>{message}</span> : null}
          action={[
            <IconButton key="close" color="inherit" onClick={handleClose}>
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </Snackbar>
    </div>
  );
}
