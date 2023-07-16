import { Stack, Typography } from '@mui/material';

import SampleHashtagChip from '@components/chip/SampleHashtagChip';
import Space from '@components/layout/Space';

const SampleBookCard = () => {
  return (
    <Stack
      style={{
        backgroundColor: '#FFFFFF',
        height: '202px',
        width: '120px',
        alignItems: 'center',
        borderRadius: '8px',
      }}
    >
      <Space y={12} />
      <Stack width="calc(120px - 32px)">
        <img
          style={{ width: '88px', height: '128px', objectFit: 'cover' }}
          src="https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F5069969%3Ftimestamp%3D20230307160031"
        />
      </Stack>
      <Space y={12} />
      <Stack display="block" width="calc(120px - 24px)">
        <Typography fontSize="12px" fontWeight="700" noWrap={true}>
          The Rust Programming Language (Covers Rust 2018)
        </Typography>
      </Stack>
      <Stack display="block" width="calc(120px - 24px)" direction="row" spacing={4}>
        <SampleHashtagChip />
        <SampleHashtagChip />
      </Stack>
    </Stack>
  );
};

export default SampleBookCard;
