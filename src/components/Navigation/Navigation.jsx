import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { CustomLink, ListItem, NavList } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavList>
        <ListItem>
          <CustomLink to="/">Home</CustomLink>
        </ListItem>
        {isLoggedIn && (
          <ListItem>
            <CustomLink to="/contacts">My Contacts</CustomLink>
          </ListItem>
        )}
      </NavList>
    </nav>
  );
};
