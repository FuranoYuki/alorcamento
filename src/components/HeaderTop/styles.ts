import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;

  padding: 10px 20px;
  max-height: 60px;
  border-bottom: 1px solid var(--border-bottom);
`;

export const Button = styled.button`
  border-radius: 5px;

  border: none;
  background-color: var(--pink-color);

  &:hover {
    cursor: pointer;
    background-color: rgb(225, 42, 82);
  }
`;

export const ButtonIcon = styled(FontAwesomeIcon)`
  width: 14px;
  height: 14px;
  margin: 10px 15px;

  color: var(--white-color);
`;

export const Logout = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 5px;

  color: var(--pink-color);

  &:hover {
    cursor: pointer;
    color: rgb(225, 42, 82);
  }

  > span {
    font-size: 14px;
    font-weight: 600;
  }
`;

export const LogoutIcon = styled(FontAwesomeIcon)`
  width: 14px;
  height: 14px;
`;
