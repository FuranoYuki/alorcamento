import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  color: var(--gray-dark-color);
  background-color: var(--body-color);
`;

export const Content = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  overflow-x: auto;
`;

export const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px 0;

  width: 100%;
  padding: 20px;
  border-bottom: 1px solid var(--border-bottom);

  color: var(--gray-dark-color);
  background-color: var(--white-color);
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 0 10px;

  padding: 10px 0;

  > svg {
    width: 50px !important;
    height: 50px;
  }
`;

export const Title = styled.h2`
  font-size: 26px;
  font-weight: 700;
`;
