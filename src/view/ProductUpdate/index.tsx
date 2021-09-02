import React from "react";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaste } from "@fortawesome/free-solid-svg-icons";

import NavBar from "../../components/NavBar";
import HeaderTop from "../../components/HeaderTop";
import ProductFormUpdate from "../../components/ProductFormUpdate";
import { Container, Content, TopSection, Top, Title, Bottom } from "./styles";

const ProductUpdate: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <Content>
        <HeaderTop />
        <TopSection>
          <Top>
            <FontAwesomeIcon icon={faPaste} />
            <Title>Atualizar Produto</Title>
          </Top>
          <Bottom>
            <Link to="/">Home</Link>
            <span> &gt; </span>
            <Link to="/product">Product</Link>
            <span> &gt; </span>
            <Link to="#">Atualizar Produto</Link>
          </Bottom>
        </TopSection>
        <ProductFormUpdate />
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

export default ProductUpdate;
