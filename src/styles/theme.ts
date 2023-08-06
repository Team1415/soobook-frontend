import { createTheme } from '@mui/material';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
          margin: 0,
          padding: 0,
        },
        html: {
          height: '100%',
          width: '100%',
        },
        body: {
          height: '100%',
          width: '100%',
        },
        '#root': {
          height: '100%',
          width: '100%',
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        noOptions: {
          fontSize: '12px',
        },
        option: {
          borderBottom: '0.1px dashed rgba(159, 159, 159, 0.3)',
          minHeight: '30px',
          display: 'block',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        listbox: {
          maxHeight: '200px',
          fontSize: '12px',
        },
      },
    },
    MuiSkeleton: {
      defaultProps: {
        animation: 'wave',
      },
    },
  },
  typography: {
    fontFamily: ['Noto Sans KR', 'sans-serif', '-apple-system', 'BlinkMacSystemFont'].join(','),
    h4: {
      fontSize: '20px',
      fontWeight: 700,
    },
    h5: {
      fontSize: '15px',
      fontWeight: 400,
    },
    h6: {
      fontSize: '12px',
      fontWeight: 700,
    },
  },
  spacing: 1,
});

export default theme;
