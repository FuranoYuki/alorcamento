import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  overflow-y: auto;
  overflow-x: hidden;
`;

export const TopSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px 0;

  padding: 20px;
  border-bottom: 1px solid var(--border-bottom);
  background-color: var(--body-color);
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px 0;

  > h2 {
    font-size: 24px;
  }
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 0 10px;
  font-size: 22px;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Bottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px 5px;

  font-size: 12px;
  font-weight: 600;

  @media (max-width: 600px) {
    font-size: 11px;
  }

  > a {
    color: var(--light-blue);
  }
`;

export const ClientIcon = styled(FontAwesomeIcon)`
  width: 60px !important;
  height: 60px;

  @media (max-width: 600px) {
    width: 40px !important;
    height: 40px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px 10px;

  padding: 25px;

  color: var(--white-color);
  background-color: var(--white-color);
`;

const ButtonCss = css`
  width: 180px;
  height: 60px;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  border-radius: 8px;
  border: 1px solid var(--border-bottom);

  color: white;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonCreate = styled.button`
  ${ButtonCss};
  background-color: var(--body-color);

  &:hover {
    cursor: pointer;
    background-color: var(--dark-blue);
  }
`;

export const ButtonPreview = styled.button`
  ${ButtonCss};
  background-color: var(--green-color);

  &:hover {
    cursor: pointer;
    background-color: var(--green-dark-color);
  }
`;

export const ButtonDownload = styled.button`
  ${ButtonCss};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--pink-color);

  &:hover {
    cursor: pointer;
    background-color: var(--pink-dark-color);
  }
`;

export const PDFPreView = styled.div`
  display: none;

  padding: 20px;

  background-color: var(--white-color);

  > iframe {
    width: 800px;
    height: 500px;
    max-width: 90%;
    margin: 0 auto;
    border-radius: 8px;
    border: 3px solid var(--pink-color);
  }
`;
