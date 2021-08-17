import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;

  background-color: var(--dark-blue);
`;

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  > span {
    margin-top: 20px;

    text-align: center;
    font-size: 14px;
    font-weight: 600;
    line-height: 21px;
    color: var(--pink-dark-color);
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;

  padding: 50px 50px;
  border-radius: 10px;

  background-color: var(--dark-blue);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);

  > hr {
    margin: 20px 0;
    color: var(--pink-color);
  }

  @media (max-width: 600px) {
    box-shadow: none;
  }
`;

export const Header = styled.header`
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  color: white;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  min-width: 250px;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px 0;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  color: var(--gray-dark-color);

  > span {
    margin-left: 20px;
    color: var(--salmon-color);
  }
`;

export const Input = styled.input`
  border: 1px solid #eee;
  border-radius: 5px;
  width: 100%;
  min-height: 41px;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 500;

  color: black;
  background-color: #fefefe;
`;

export const Button = styled.button`
  width: 100%;
  padding: 8px 20px;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 700;
  border-radius: 5px;
  line-height: 1.5rem;
  letter-spacing: 2px;
  border: none;

  cursor: pointer;
  color: white;
  background-color: var(--pink-color);

  &:hover {
    background-color: var(--pink-dark-color);
  }
`;
