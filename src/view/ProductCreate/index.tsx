import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { faPaste } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavBar from "../../components/NavBar";
import HeaderTop from "../../components/HeaderTop";
import ProductFormCreate from "../../components/ProductFormCreate";
import { Container, Content, TopSection, Top, Title, Bottom } from "./styles";

const ProductCreate: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <Content>
        <HeaderTop />
        <TopSection>
          <Top>
            <FontAwesomeIcon icon={faPaste} />
            <Title>Cadastro de Produtos</Title>
          </Top>
          <Bottom>
            <Link to="/">Home</Link>
            <span> &gt; </span>
            <Link to="/product">Produtos</Link>
            <span> &gt; </span>
            <Link to="#">Cadastrar Produto</Link>
          </Bottom>
        </TopSection>
        <ProductFormCreate />
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

export default ProductCreate;
