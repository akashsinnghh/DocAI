import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loader() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Semi-transparent black background
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,  // Ensure it's on top of other content
      }}
    >
      <Stack spacing={2} direction="row" alignItems="center" justifyContent="center">
        <CircularProgress size={50} />
      </Stack>
    </div>
  );
}
