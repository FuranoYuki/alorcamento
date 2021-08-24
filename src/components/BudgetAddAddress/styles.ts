import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  border-top: 1px solid var(--border-bottom);

  background-color: var(--white-color);
`;

export const Wrapper = styled.div``;

export const Title = styled.h2`
  text-align: center;
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
  background-color: var(--body-color);
`;

export const Select = styled.select`
  font-size: 16px;
  font-weight: 500;

  border: none;
  outline: none;

  color: white;
  background-color: var(--body-color);
`;
