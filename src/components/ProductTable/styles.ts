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

  width: 625px;
  margin: 0 auto;
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

  width: 125px;
  min-width: 125px;
  padding: 5px;
  font-weight: 600;

  color: var(--pink-color);

  > svg {
    display: none;
  }
`;

export const TBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0;

  width: 100%;
`;
