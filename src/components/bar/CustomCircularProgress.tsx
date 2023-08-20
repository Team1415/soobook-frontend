import { Box, CircularProgress } from '@mui/material';

const CustomCircularProgress = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '20px',
      }}
    >
      <CircularProgress style={{ color: '#203c8e' }} />
    </Box>
  );
};

export default CustomCircularProgress;
