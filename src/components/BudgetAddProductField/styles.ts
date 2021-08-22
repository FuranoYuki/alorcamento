import styled from "styled-components";

export const TableTr = styled.div`
  display: flex;
  align-items: center;

  position: relative;
  padding: 0 5px;
  border-radius: 8px;
  border: 2px solid var(--border-bottom);

  background-color: var(--dark-blue);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.32);

  &:hover {
    > *:last-child {
      display: flex;
    }
  }
`;

export const ImageBox = styled.div`
  display: flex;
  overflow: hidden;

  position: relative;
  width: 100%;
  height: 110px;

  > img {
    display: flex;
    justify-self: center;
    align-self: center;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 160px;
    object-fit: contain;
    object-position: center;
  }
`;

export const TableTd = styled.td`
  text-align: center;

  width: 120px;
  font-weight: 600;

  color: white;
`;

export const TableTdRemove = styled.td`
  display: none;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(1, 1, 1, 0.3);
`;

export const TableRemoveButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  border: 2px solid var(--pink-color);

  background-color: white;

  &:hover {
    cursor: pointer;

    > svg {
      color: var(--pink-dark-color);
    }
  }

  > svg {
    font-size: 24px;
    color: var(--pink-color);
  }
`;
