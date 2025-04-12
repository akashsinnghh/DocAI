import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const DialogComponent = ({ open, onClose, title, children, onConfirm, onCloseButton, onConfirmButton }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        {title}
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        {children} {/* The content of the dialog will be passed as children */}
      </DialogContent>
      <DialogActions>
        {onCloseButton && <Button onClick={onClose} color="primary">
          Cancel
        </Button>}
        {onConfirmButton && <Button onClick={onConfirm} color="primary">
          Confirm
        </Button>}
      </DialogActions>
    </Dialog>
  );
};

export default DialogComponent;
