import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.7);
`;

export const Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;

  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  width: 350px;
  max-width: 90%;
  min-height: 300px;
  border: 1px solid black;
  border-radius: 15px;

  background-color: var(--body-color);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
`;

export const ButtonCancel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 10px;
  right: 10px;
  height: 50px;
  width: 50px;

  &:hover {
    cursor: pointer;

    > svg {
      color: var(--pink-dark-color);
    }
  }

  > svg {
    font-size: 32px;
    color: var(--salmon-color);
  }
`;

export const Content = styled.div`
  margin: 20px 0;
  font-size: 20px;
  text-align: center;
`;

interface Disabled {
  disabled?: boolean;
}

export const Download = styled.a<Disabled>`
  padding: 15px 20px;
  font-size: 20px;
  font-weight: 600;
  border-radius: 10px;

  color: white;
  text-decoration: none;
  background-color: var(--pink-color);

  &:hover {
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    background-color: ${(props) =>
      props.disabled ? "var(--pink-color)" : "var(--pink-dark-color)"};
  }
`;
