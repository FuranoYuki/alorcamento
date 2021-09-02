import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;

  background-color: rgba(1, 1, 1, 0.75);
`;

export const Modal = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  width: 600px;
  min-height: 400px;
  padding: 20px;

  @media (max-width: 700px) {
    width: 100%;
    height: 100%;
  }

  background-color: var(--body-color);
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 100%;

  > svg {
    margin-top: 10px;
    margin-right: 15px;
    font-size: 28px;
    color: var(--salmon-color);

    &:hover {
      cursor: pointer;
      color: var(--pink-dark-color);
    }
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;

  width: 100%;

  @media (max-width: 700px) {
    justify-content: center;
  }
`;

export const InputFilter = styled.input`
  display: flex;

  padding: 8px;
  min-width: 100px;
  border-radius: 5px;
  border: 1px solid var(--border-bottom);

  color: white;
  background-color: var(--white-color);

  &:focus {
    outline: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;

  width: 100%;
  min-height: 200px;
  max-height: 300px;

  background-color: var(--white-color);
`;

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const ContentHeaderField = styled.div`
  width: 120px;
  padding: 10px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;

  color: var(--pink-color);
`;

export const Button = styled.button`
  width: 180px;
  padding: 15px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  border: 1px solid var(--border-bottom);

  color: white;
  background-color: var(--pink-color);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.15);

  &:hover {
    cursor: pointer;
    background-color: var(--pink-dark-color);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
