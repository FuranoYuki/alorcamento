import styled, { css } from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  background-color: rgba(1, 1, 1, 0.6);
`;

export const Modal = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px 0;

  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 35px 20px;
  width: 450px;
  border-radius: 10px;

  background-color: var(--body-color);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.65);

  @media (max-width: 700px) {
    width: 100%;
    height: 100%;
    justify-content: center;
    gap: 40px 0;
  }
`;

export const Header = styled.div`
  font-size: 18px;
  font-weight: 600;
  text-align: left;

  color: var(--pink-color);
`;

export const Field = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px 0;

  width: 100%;
  padding: 0 20px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
`;

export const Input = styled.input`
  padding: 10px 20px;
  border: 1px solid var(--border-bottom);
  border-radius: 5px;

  color: white;
  background-color: var(--white-color);

  &:focus {
    outline: none;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px 10px;
`;

export const ButtonCss = css`
  width: 180px;
  height: 60px;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  border-radius: 8px;
  border: 1px solid var(--border-bottom);

  color: white;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonCancel = styled.button`
  ${ButtonCss}
  background-color: var(--green-color);

  &:hover {
    cursor: pointer;
    background-color: var(--green-dark-color);
  }
`;

export const ButtonDelete = styled.button`
  ${ButtonCss}
  background-color: var(--pink-color);

  &:hover {
    cursor: pointer;
    background-color: var(--pink-dark-color);
  }
`;
