import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";

import HeaderTop from "../../components/HeaderTop";
import BudgetAddCustomer from "../../components/BudgetAddCustomer";
import BudgetAddProduct from "../../components/BudgetAddProduct";
import PDFTest from "../PDFTest";
import NavBar from "../../components/NavBar";
import ModalDownloadPDF from "../../components/ModalDownloadPDF";
import {
  Container,
  TopSection,
  Info,
  Top,
  Bottom,
  ClientIcon,
  Buttons,
  ButtonCreate,
  ButtonDownload,
  ButtonPreview,
  PDFPreView,
  Content,
} from "./styles";

interface Product {
  id: string;
  name: string;
  image: string;
  qtd: string;
  value: string;
}

interface Customer {
  name?: string;
  phoneNumber?: string;
  address?: string;
  city?: string;
  state?: string;
  neighbor?: string;
  cep?: string;
  email?: string;
  cnpj?: string;
}

const BudgetCreate: React.FC = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const pdfBoxRef = useRef<HTMLDivElement>(null);
  const [showModal, setshowModal] = useState(false);
  const [customer, setcustomer] = useState<Customer>({});
  const [products, setproducts] = useState<Product[]>([]);

  const handlerProcuts = (prod: Product[]) => {
    setproducts(prod);
  };

  const handlerCustomer = (cust: Customer) => {
    setcustomer(cust);
  };

  const handlerButtonCreateClick = () => {
    console.log("criar orcamento");
  };

  const handlerButtonPreviewClick = () => {
    const pdf = pdfBoxRef.current as HTMLDivElement;
    pdf.style.display = "flex";
  };

  const handlerButtonDownloadClick = () => {
    const modal = modalRef.current as HTMLDivElement;
    setshowModal(true);

    modal.style.display = "flex";
  };

  const hadlerCloseModal = () => {
    const modal = modalRef.current as HTMLDivElement;
    setshowModal(false);
    modal.style.display = "none";
  };

  return (
    <Container>
      <NavBar />
      <Content>
        <HeaderTop />
        <TopSection>
          <Info>
            <Top>
              <ClientIcon icon={faCalculator} />
              <h2>Criar Orçamento</h2>
            </Top>
            <Bottom>
              <Link to="/">Home</Link>
              <span> &gt; </span>
              <Link to="/budget">Orçamento</Link>
              <span> &gt; </span>
              <Link to="/budget/create">Criar Orçamento</Link>
            </Bottom>
          </Info>
          <Buttons></Buttons>
        </TopSection>
        <BudgetAddCustomer handlerCustomer={handlerCustomer} />
        <BudgetAddProduct handlerProcuts={handlerProcuts} />
        <PDFPreView ref={pdfBoxRef}>
          <PDFTest products={products} customer={customer} />
        </PDFPreView>
        <Buttons>
          <ButtonCreate onClick={handlerButtonCreateClick} type="button">
            Criar Orçamento
          </ButtonCreate>
          <ButtonDownload onClick={handlerButtonDownloadClick}>
            Download
          </ButtonDownload>
          <ButtonPreview onClick={handlerButtonPreviewClick} type="button">
            Preview
          </ButtonPreview>
        </Buttons>
        <ModalDownloadPDF
          ref={modalRef}
          showModal={showModal}
          hadlerCloseModal={hadlerCloseModal}
          customer={customer}
          products={products}
        />
      </Content>
    </Container>
  );
};

export default BudgetCreate;
