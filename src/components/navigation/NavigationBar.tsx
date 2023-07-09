import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

import { NavigationBarContainer } from '@components/navigation/NavigationBar.style';
import { Menu } from '@models/menu';

const menus: Menu[] = [
  {
    label: 'home',
    url: '/',
  },
  {
    label: 'search',
    url: '/search',
  },
  {
    label: 'detail',
    url: '/detail/isbn-test',
  },
  {
    label: 'sample',
    url: '/sample',
  },
  {
    label: 'error',
    url: '/foobar',
  },
];

const NavigationBar = () => {
  return (
    <NavigationBarContainer>
      {menus.map((menu, index) => (
        <Box key={`${index}_${menu.url}`}>
          <Link to={menu.url}>{menu.label}</Link>
        </Box>
      ))}
    </NavigationBarContainer>
  );
};

export default NavigationBar;
