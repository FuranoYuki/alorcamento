import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

import NavBar from "../../components/NavBar";
import HeaderTop from "../../components/HeaderTop";
import CustomerFormCreate from "../../components/CustomerFormCreate";
import { Container, Content, TopSection, Top, Title, Bottom } from "./styles";

const CustomerCreate: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <Content>
        <HeaderTop />
        <TopSection>
          <Top>
            <FontAwesomeIcon icon={faUserTie} />
            <Title>Cadastro de Cliente</Title>
          </Top>
          <Bottom>
            <Link to="/">Home</Link>
            <span> &gt; </span>
            <Link to="/customer">Clientes</Link>
            <span> &gt; </span>
            <Link to="/customer/cadastro">Cadastro</Link>
          </Bottom>
        </TopSection>
        <CustomerFormCreate />
      </Content>
    </Container>
  );
};

export default CustomerCreate;
