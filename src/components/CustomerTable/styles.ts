import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 30px 0;
  overflow-x: auto;
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px 0;

  width: 1320px;
`;

export const THeader = styled.div`
  display: flex;
  width: 100%;
`;

export const Field = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 5px;

  width: 110px;
  min-width: 110px;
  padding: 5px;
  font-weight: 600;

  color: var(--pink-color);
`;

export const TBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0;

  width: 100%;
`;