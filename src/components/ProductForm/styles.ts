import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 20px;

  background-color: var(--white-color);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px 0;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: flex;
  flex-wrap: wrap;
  gap: 10px 10px;

  @media (max-width: 690px) {
    flex-direction: column;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px 0;
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0 10px;

  > span {
    display: none;

    font-size: 12px;
    font-weight: 600;

    color: var(--salmon-color);
  }
`;

export const Label = styled.label`
  display: flex;

  font-weight: 600;
`;

export const Input = styled.input`
  padding: 5px;
  min-width: 250px;
  border-radius: 5px;

  border: 1px solid var(--border-bottom);

  &:focus {
    outline: none;
  }
`;

export const Select = styled.select`
  padding: 5px;
  min-width: 250px;
  border-radius: 5px;

  border: 1px solid var(--border-bottom);

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  margin: auto;
  max-width: 200px;
  padding: 15px 25px;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  font-size: 14px;

  color: var(--white-color);
  background-color: var(--green-color);

  &:hover {
    cursor: pointer;
  }
`;
