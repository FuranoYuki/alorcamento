import styled from "styled-components";

export const Container = styled.tr`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 5px;

  border: 1px solid var(--border-bottom);
`;

export const Td = styled.td`
  display: flex;
  justify-content: center;
  word-break: break-all;

  padding: 10px;
  width: 100px;
  font-size: 11px;
  font-weight: 600;

  > a {
    font-size: 16px;

    &:hover {
      cursor: pointer;
      color: var(--light-blue);
    }
  }
`;
