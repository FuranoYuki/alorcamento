import styled from "styled-components";
import { PDFDownloadLink } from "@react-pdf/renderer";

export const Container = styled.div`
  display: none;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;

  background-color: rgba(1, 1, 1, 0.7);
`;

export const Modal = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 350px;
  width: 90%;
  max-width: 400px;
  padding: 40px;
  border-radius: 10px;

  background-color: var(--body-color);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.8);
`;

export const Header = styled.div`
  font-size: 18px;
  font-weight: 600;
  text-align: center;

  color: white;
`;

export const Button = styled(PDFDownloadLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--pink-color);

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

  &:hover {
    cursor: pointer;
    background-color: var(--pink-dark-color);
  }
`;
