import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;
  padding: 40px 20px;

  background-color: var(--white-color);
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px 0;

  max-width: 1000px;
`;

export const Inputs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: flex;
  flex-wrap: wrap;
  gap: 10px 10px;

  @media (max-width: 690px) {
    flex-direction: column;
  }
`;

export const Select = styled.select`
  padding: 5px;
  font-size: 16px;
  min-width: 200px;
  border-radius: 5px;

  border: none;
  color: white;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px 0;

  padding: 10px;
  border-radius: 5px;
  border: 1px solid var(--border-bottom);

  background-color: var(--dark-blue);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.16);
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0 10px;

  > span {
    display: none;

    font-size: 12px;
    font-weight: 600;

    color: var(--green-color);
  }
`;

export const Label = styled.label`
  display: flex;

  font-weight: 700;

  color: var(--pink-color);

  &:hover {
    cursor: pointer;
  }
`;

export const Input = styled.input`
  padding: 5px;
  font-size: 16px;
  min-width: 200px;
  border-radius: 5px;

  border: none;
  color: white;
  background-color: transparent;

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px 10px;
`;

export const Button = styled.button`
  width: 120px;
  padding: 15px 25px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;

  color: white;
  background-color: var(--green-color);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.16);

  &:hover {
    cursor: pointer;
    background-color: var(--green-dark-color);
  }
`;

export const ButtonBack = styled.button`
  width: 120px;
  padding: 15px 25px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;

  color: white;
  background-color: var(--light-blue);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.16);

  &:hover {
    cursor: pointer;
    background-color: var(--light-blue-hover);
  }
`;
