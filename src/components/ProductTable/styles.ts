import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  overflow-x: auto;
  max-width: 750px;
  margin: auto;

  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
`;

export const Table = styled.table`
  width: 100%;
  max-width: 730px;
  border-collapse: collapse;
`;

export const THeader = styled.thead`
  display: flex;
  width: 100%;
`;

export const TBody = styled.tbody`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const Tr = styled.tr`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  gap: 0 5px;

  width: 100%;
`;

export const Th = styled.th`
  display: flex;
  justify-content: center;
  word-break: break-all;
  word-wrap: break-word;
  gap: 0 5px;

  padding: 10px;
  width: 100px;
  font-size: 13px;
  font-weight: 700;
  border-radius: 5px;
  outline: none;

  color: "var(--gray-dark-color)";
  background-color: "transparent";

  &:hover {
    outline: none;
    cursor: pointer;
    color: white;
    background-color: var(--dark-blue);
  }
`;
