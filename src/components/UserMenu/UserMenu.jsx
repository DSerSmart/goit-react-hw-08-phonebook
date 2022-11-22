import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { LogOut, StyledAvatar, Text, UserGrap } from './UserMenu.styled';
import { deepPurple } from '@mui/material/colors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserGrap>
      <StyledAvatar sx={{ bgcolor: deepPurple[500] }}></StyledAvatar>
      <Text> {user.name}</Text>
      <LogOut variant="outlined" onClick={() => dispatch(logout())}>
        Logout
      </LogOut>
    </UserGrap>
  );
};
