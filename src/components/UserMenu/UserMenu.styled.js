import styled from 'styled-components';
import { Avatar } from '@mui/material';

export const UserGrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  font-family: Roboto;
  margin-right: 10px;
`;
export const StyledAvatar = styled(Avatar)`
  font-family: Roboto;
  margin-right: 10px;

  font-weight: bold;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
`;

export const LogOut = styled.button`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.75;
  min-width: 64px;
  padding: 5px 15px;
  border-radius: 4px;
  border: 2px solid #fff;
  background-color: #1976d2;
  color: #fff;

  &:hover {
    background-color: #fff;
    color:cadetblue;
  }
`;
