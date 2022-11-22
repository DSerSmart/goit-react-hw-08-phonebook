import { CustomLink, ListItem, NavList } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <NavList>
      <ListItem>
        <CustomLink to="/register">Register</CustomLink>
      </ListItem>
      <ListItem>
        <CustomLink to="/login">Log In</CustomLink>
      </ListItem>
    </NavList>
  );
};
