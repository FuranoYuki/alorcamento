import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  display: flex;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  color: var(--gray-dark-color);
  background-color: var(--body-color);
`;

export const Content = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  overflow-x: auto;
`;

export const TopSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px 0;

  padding: 20px;
  border-bottom: 1px solid var(--border-bottom);
  background-color: var(--body-color);
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px 0;

  > h2 {
    font-size: 24px;
  }
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 0 10px;
`;

export const Bottom = styled.div`
  display: flex;
  gap: 0 5px;

  font-size: 12px;
  font-weight: 600;

  > a {
    color: var(--light-blue);
  }
`;

export const ClientIcon = styled(FontAwesomeIcon)`
  width: 50px !important;
  height: 50px;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 0 10px;

  color: var(--white-color);
`;

const ButtonCss = css`
  display: flex;

  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;
  border: 1px solid var(--border-bottom);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

  color: white;

  &:hover {
    cursor: pointer;
  }
`;

export const Cadastrar = styled.button`
  ${ButtonCss}
  background-color: var(--green-color);

  &:hover {
    background-color: var(--green-dark-color);
  }

  > a {
    padding: 10px 20px;

    color: inherit;
    text-decoration: none;
  }
`;
