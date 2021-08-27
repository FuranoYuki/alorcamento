import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  border-radius: 8px;
  border: 1px solid var(--border-bottom);

  background-color: var(--body-color);
`;

export const Td = styled.div`
  display: flex;
  justify-content: center;
  word-break: break-all;

  padding: 10px 5px;
  min-width: 110px;
  width: 110px;
  font-size: 13px;
  font-weight: 600;
  text-align: center;

  > a {
    font-size: 20px;
    color: white;

    &:hover {
      cursor: pointer;
      color: var(--pink-color);
    }
  }
`;

export const TdRemove = styled.div`
  display: flex;
  justify-content: center;
  word-break: break-all;

  padding: 0 5px;
  min-width: 110px;
  width: 110px;
  font-size: 20px;
  font-weight: 600;

  > svg {
    &:hover {
      cursor: pointer;
      color: var(--salmon-color);
    }
  }
`;

export const TdEdit = styled.div`
  display: flex;
  justify-content: center;
  word-break: break-all;

  padding: 0 5px;
  min-width: 110px;
  width: 110px;
  font-size: 20px;
  font-weight: 600;

  > a {
    color: white;
    &:hover {
      cursor: pointer;
      color: var(--green-color);
    }
  }
`;
