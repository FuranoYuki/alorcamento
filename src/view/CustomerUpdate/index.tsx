import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

import api from "../../service/http";
import NavBar from "../../components/NavBar";
import ICustomer from "../../interfaces/ICustomer";
import HeaderTop from "../../components/HeaderTop";
import CustomerFormUpdate from "../../components/CustomerFormUpdate";
import { Container, Content, TopSection, Top, Title, Bottom } from "./styles";

interface Params {
  id: string;
}

const CustomerUpdate: React.FC = () => {
  const { id } = useParams<Params>();
  const [customer, setcustomer] = useState<ICustomer>({
    _id: "",
    name: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    neighbor: "",
    cep: "",
    email: "",
    cnpj: "",
    cpf: "",
  });

  useEffect(() => {
    api
      .post("/alorcamentos/customer/findOne", { id })
      .then((res) => {
        setcustomer(res.data.customer);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <NavBar />
      <Content>
        <HeaderTop />
        <TopSection>
          <Top>
            <FontAwesomeIcon icon={faUserTie} />
            <Title>Atualizar Cliente</Title>
          </Top>
          <Bottom>
            <Link to="/">Home</Link>
            <span> &gt; </span>
            <Link to="/customer">Clientes</Link>
            <span> &gt; </span>
            <Link to="/customer/update">Atualizar</Link>
          </Bottom>
        </TopSection>
        <CustomerFormUpdate customer={customer} />
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

export default CustomerUpdate;
