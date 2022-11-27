import { Backdrop, CircularProgress } from '@mui/material';

export const Loader = ({ isOpen }) => {
  return (
    <Backdrop
      sx={{
        color: 'rgb(99 102 241)',
        zIndex: theme => theme.zIndex.drawer + 1,
      }}
      open={isOpen}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
