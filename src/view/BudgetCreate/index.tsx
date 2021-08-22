import React, { useState, useRef, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { PDFViewer, pdf } from "@react-pdf/renderer";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";

import IProduct from "../../interfaces/IProduct";
import ICustomer from "../../interfaces/ICustomer";
import api from "../../service/http";
import HeaderTop from "../../components/HeaderTop";
import BudgetAddCustomer from "../../components/BudgetAddCustomer";
import BudgetAddProduct from "../../components/BudgetAddProduct";
import PDFDownload from "../../components/PDFDownload";
import PDFGuia from "../../components/PDFGuia";
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

const BudgetCreate: React.FC = () => {
  const history = useHistory();
  const modalRef = useRef<HTMLDivElement>(null);
  const pdfBoxRef = useRef<HTMLDivElement>(null);
  const [showModal, setshowModal] = useState(false);
  const [customer, setcustomer] = useState<ICustomer>({});
  const [products, setproducts] = useState<IProduct[]>([]);

  const handlerProcuts = (prod: IProduct[]) => {
    setproducts(prod);
  };

  const handlerCustomer = (cust: ICustomer) => {
    setcustomer(cust);
  };

  const handlerButtonCreateClick = async () => {
    const blobBudget = await pdf(
      <PDFDownload products={products} customer={customer} />
    ).toBlob();

    const blobGuia = await pdf(
      <PDFGuia products={products} customer={customer} />
    ).toBlob();

    const budgetPdfFile = new File([blobBudget], "alorcamento", {
      lastModified: Date.now(),
      type: blobBudget.type,
    });

    const guiaPdfFile = new File([blobGuia], "alorcamento", {
      lastModified: Date.now(),
      type: blobGuia.type,
    });

    const budget = new FormData();
    budget.append("budgetFile", budgetPdfFile);
    budget.append("guiaFile", guiaPdfFile);
    budget.append("customer", JSON.stringify(customer));
    budget.append("products", JSON.stringify(products));
    api({
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: budget,
      method: "POST",
      url: "/alorcamentos/budget/create",
    })
      .then(() => {
        history.push("/budget");
      })
      .catch((error) => {
        console.log(error);
      });
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
          <PDFViewer>
            <PDFGuia products={products} customer={customer} />
          </PDFViewer>
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
        {/* <ModalDownloadPDF
          ref={modalRef}
          showModal={showModal}
          hadlerCloseModal={hadlerCloseModal}
          customer={customer}
          products={products}
        /> */}
      </Content>
    </Container>
  );
};

export default BudgetCreate;
