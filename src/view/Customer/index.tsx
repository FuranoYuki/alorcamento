import React from "react";
import { Link } from "react-router-dom";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";

import ClientContent from "../../components/ClientContent";

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

const Customer: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <Content>
        <HeaderTop />
        <TopSection>
          <Info>
            <Top>
              <ClientIcon icon={faUserFriends} />
              <h2>Clientes</h2>
            </Top>
            <Bottom>
              <Link to="/">Home</Link>
              <span> &gt; </span>
              <Link to="/customer">Clientes</Link>
            </Bottom>
          </Info>
          <Buttons>
            <Cadastrar>
              <Link to="/customer/create">Cadastrar</Link>
            </Cadastrar>
          </Buttons>
        </TopSection>
        <ClientContent />
      </Content>
    </Container>
  );
};

export default Customer;
