import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { faPaste } from "@fortawesome/free-solid-svg-icons";

import ProductContent from "../../components/ProductContent";
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

const Product: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <Content>
        <HeaderTop />
        <TopSection>
          <Info>
            <Top>
              <ClientIcon icon={faPaste} />
              <h2>Produtos</h2>
            </Top>
            <Bottom>
              <Link to="/">Home</Link>
              <span> &gt; </span>
              <Link to="/product">Produtos</Link>
            </Bottom>
          </Info>
          <Buttons>
            <Cadastrar>
              <Link to="/product/create">Cadastrar</Link>
            </Cadastrar>
          </Buttons>
        </TopSection>
        <ProductContent />
      </Content>
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
    </Container>
  );
};

export default Product;
