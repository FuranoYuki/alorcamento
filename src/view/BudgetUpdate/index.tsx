import React from "react";
import { ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";

import NavBar from "../../components/NavBar";
import HeaderTop from "../../components/HeaderTop";
import BudgetFormUpdate from "../../components/BudgetFormUpdate";
import { Container, Content, TopSection, Top, Title } from "./styles";

const BudgetUpdate: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <Content>
        <HeaderTop />
        <TopSection>
          <Top>
            <FontAwesomeIcon icon={faCalculator} />
            <Title>Editar Orçamento</Title>
          </Top>
        </TopSection>
        <BudgetFormUpdate />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Content>
    </Container>
  );
};

export default BudgetUpdate;
