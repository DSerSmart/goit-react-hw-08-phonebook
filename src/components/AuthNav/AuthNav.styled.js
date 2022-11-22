import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const CustomLink = styled(NavLink)`
  font-family: Roboto;

  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  color: #fff;

  &:hover {
    color: #b3e5fc;
    text-decoration: none;
    border-bottom: 2px solid;
  }
`;

export const NavList = styled.ul`
  display: flex;
`;
export const ListItem = styled.li`
  margin-right: 10px;
  list-style: none;
`;
