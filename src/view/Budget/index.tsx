import React from "react";
import { Link } from "react-router-dom";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";

import {
  Container,
  Content,
  TopSection,
  Info,
  Top,
  Bottom,
  ClientIcon,
  Buttons,
  Cadastrar,
} from "./styles";

import NavBar from "../../components/NavBar";
import HeaderTop from "../../components/HeaderTop";
import BudgetContent from "../../components/BudgetContent";

const Budget: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <Content>
        <HeaderTop />
        <TopSection>
          <Info>
            <Top>
              <ClientIcon icon={faCalculator} />
              <h2>Orçamento</h2>
            </Top>
            <Bottom>
              <Link to="/">Home</Link>
              <span> &gt; </span>
              <Link to="/customer">Orçamento</Link>
            </Bottom>
          </Info>
          <Buttons>
            <Cadastrar>
              <Link to="/budget/create">Cadastrar</Link>
            </Cadastrar>
          </Buttons>
        </TopSection>
        <BudgetContent />
      </Content>
    </Container>
  );
};

export default Budget;
