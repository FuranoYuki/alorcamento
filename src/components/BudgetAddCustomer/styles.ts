import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  background-color: var(--white-color);
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 0 10px;

  font-weight: 700;

  @media (max-width: 600px) {
    > h2 {
      font-size: 16px;
    }
  }
`;

export const Info = styled.p`
  margin: 20px 0;
  font-size: 14px;
  font-weight: 600;

  color: var(--salmon-color);
`;

export const Fields = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px 20px;

  height: auto;
  max-width: 800px;
  margin: 30px auto;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 8px 0;

  width: 220px;
  max-width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid var(--border-bottom);
  background-color: var(--body-color);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.16);
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 700;

  color: var(--pink-color);
`;

export const Input = styled.input`
  font-size: 16px;
  font-weight: 500;

  border: none;
  outline: none;

  color: white;
  background-color: transparent;
`;

export const Select = styled.select`
  font-size: 16px;
  font-weight: 500;

  border: none;
  outline: none;

  color: white;
  background-color: transparent;
`;

export const AutoCode = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px 0;

  margin: 30px 0;
`;

export const Button = styled.button`
  margin: auto;
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
`;

export const AutoInputs = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px 10px;
`;

export const AutoInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > label {
    color: white;
  }

  > input {
    font-weight: 600;

    color: white;
    background-color: var(--body-color);
  }
`;

export const Warning = styled.div`
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  color: var(--salmon-color);
`;

export const WarningError = styled.div`
  display: none;

  font-size: 12px;
  font-weight: 700;
  text-align: center;

  color: var(--green-color);
`;

export const WarningExist = styled.div`
  display: none;

  font-size: 12px;
  font-weight: 700;
  text-align: center;

  color: var(--green-color);
`;

export const CodeInput = styled.input`
  width: 150px;
  padding: 10px;
  outline: none;
  border-radius: 5px;
  border: 1px solid gray;

  background-color: transparent;
`;
