import { Avatar, Box, Typography } from '@mui/material';

const UserHeader = () => {
  // TODO : login 여부에 따라 비회원 / 회원 보여주는 게 달라지도록 변경
  const userName = sessionStorage.getItem('user-name');

  return (
    <Box
      width="100%"
      height="60px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{ background: '#FFFFFF' }}
    >
      <Box marginLeft="20px" display="flex">
        {userName ? (
          <>
            <Typography fontSize="15px" fontWeight="400" whiteSpace="pre">
              {'안녕하세요 '}
            </Typography>
            <Typography fontSize="15px" fontWeight="700">
              {userName}
            </Typography>
            <Typography fontSize="15px" fontWeight="400">
              님
            </Typography>
          </>
        ) : (
          <Typography fontSize="15px" fontWeight="400">
            수북의 서비스를 둘러보세요
          </Typography>
        )}
      </Box>
      <Avatar
        src="/src/assets/fallback-user-icon.svg"
        sx={{ width: '16px', height: '16px', marginRight: '20px' }}
        variant={userName ? 'rounded' : 'square'}
      >
        {userName}
      </Avatar>
    </Box>
  );
};

export default UserHeader;
