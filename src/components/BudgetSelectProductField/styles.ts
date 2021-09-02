import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;

  border-top: 1.5px solid var(--border-bottom);

  &:hover {
    cursor: pointer;
  }
`;

export const Field = styled.div`
  width: 120px;
  padding: 10px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  word-break: keep-all;

  color: white;
`;
