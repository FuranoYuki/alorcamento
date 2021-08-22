import styled from "styled-components";

export const Container = styled.div`
  border-top: 1px solid var(--border-bottom);

  background-color: var(--white-color);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px 0;

  padding: 20px;
`;

export const Header = styled.h2`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 0 10px;

  font-weight: 700;
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 0;
  overflow-x: auto;

  > div {
    display: flex;
    flex-direction: column;
    gap: 10px 0;
    margin: auto;
  }
`;

export const THead = styled.div`
  display: flex;

  padding: 0 5px;

  color: white;
`;

export const TBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px 0;

  width: 100%;
  overflow-x: auto;
`;

export const TableTh = styled.div`
  width: 120px;
  text-align: center;
`;

export const TableTd = styled.div`
  text-align: center;

  width: 140px;
  color: black;

  > img {
    display: flex;
    justify-self: center;
    align-self: center;
    max-width: 100%;
  }
`;

export const AddProducts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px 0;

  max-width: 100%;
  margin: auto;
  padding: 30px;
  border-radius: 10px;

  background-color: var(--body-color);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.27);
`;

export const Fields = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0 15px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px 0;

  width: 100px;
`;

export const Label = styled.label`
  text-align: center;
  font-weight: 600;
  color: white;
  font-weight: 500;
`;

export const Input = styled.input`
  padding: 5px;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  outline: none;

  @media (max-width: 600px) {
    font-size: 12px;
  }
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

  &:disabled {
    cursor: not-allowed;
  }
`;
