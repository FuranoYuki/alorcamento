import React, { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { PDFViewer, pdf } from "@react-pdf/renderer";
import { toast, ToastContainer } from "react-toastify";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";

import api from "../../service/http";
import IProduct from "../../interfaces/IProduct";
import ICustomer from "../../interfaces/ICustomer";
import ISendingAddress from "../../interfaces/ISendingAddress";
import { successStyle, errorStyle } from "../../components/Notifications";

import NavBar from "../../components/NavBar";
import PDFGuia from "../../components/PDFGuia";
import HeaderTop from "../../components/HeaderTop";
import PDFDownload from "../../components/PDFDownload";
import ModalDownload from "../../components/ModalDownload";
import BudgetAddProduct from "../../components/BudgetAddProduct";
import BudgetAddAddress from "../../components/BudgetAddAddress";
import BudgetAddCustomer from "../../components/BudgetAddCustomer";
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
  const pdfBoxRef = useRef<HTMLDivElement>(null);
  const [modal, setmodal] = useState(false);
  const [blob, setblob] = useState("");
  const [preview, setpreview] = useState(false);
  const [customer, setcustomer] = useState<ICustomer>({});
  const [products, setproducts] = useState<IProduct[]>([]);
  const [sendingAddress, setsendingAddress] = useState<ISendingAddress>({});

  const handlerProcuts = (prod: IProduct[]) => {
    setproducts(prod);
  };

  const handlerCustomer = (cust: ICustomer) => {
    setcustomer(cust);
  };

  const handlerSendingAddresss = (send: ISendingAddress) => {
    setsendingAddress(send);
  };

  const handlerButtonCreateClick = async () => {
    toast.dark("Criando orçamento...", successStyle);

    const dateNow = new Date();
    const formatedDate = `${dateNow.getDate()}/${
      dateNow.getMonth() + 1
    }/${dateNow.getFullYear()}`;

    const address = `${sendingAddress.address} ${sendingAddress.complement}`;

    const blobBudget = await pdf(
      <PDFDownload
        products={products}
        customer={customer}
        sendingAddress={sendingAddress}
        date={formatedDate}
        address={address}
      />
    ).toBlob();

    const blobGuia = await pdf(
      <PDFGuia
        products={products}
        customer={customer}
        sendingAddress={sendingAddress}
        date={formatedDate}
        address={address}
      />
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
      onUploadProgress: (event) => {
        const progress: number = Math.round((event.loaded * 100) / event.total);

        toast.info("Cadastrando orçamento...", {
          ...successStyle,
          progress,
        });
      },
    })
      .then(() => {
        toast.success("Orçamento cadastrado", successStyle);
        setTimeout(() => {
          history.push("/budget");
        }, 2500);
      })
      .catch(() => {
        toast.error("Falha ao cadastrar orçamento", errorStyle);
      });
  };

  const handlerButtonPreviewClick = () => {
    const pdf = pdfBoxRef.current as HTMLDivElement;
    pdf.style.display = pdf.style.display == "flex" ? "none" : "flex";

    setpreview(!preview);
  };

  const handlerDownloadClick = () => {
    const blobUrl = document.getElementsByTagName("iframe")[0].src;
    setblob(blobUrl);
    handlerModalShow();
  };

  const handlerModalShow = () => {
    setmodal(!modal);
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
        <BudgetAddAddress handlerSendingAddresss={handlerSendingAddresss} />
        <BudgetAddProduct handlerProcuts={handlerProcuts} />
        <Buttons>
          <ButtonCreate onClick={handlerButtonCreateClick} type="button">
            Criar Orçamento
          </ButtonCreate>
          <ButtonDownload onClick={handlerDownloadClick}>
            Download
          </ButtonDownload>
          <ButtonPreview onClick={handlerButtonPreviewClick} type="button">
            Preview
          </ButtonPreview>
        </Buttons>
        <PDFPreView ref={pdfBoxRef}>
          {preview && (
            <PDFViewer>
              <PDFDownload
                products={products}
                customer={customer}
                sendingAddress={sendingAddress}
              />
            </PDFViewer>
          )}
        </PDFPreView>
      </Content>
      {modal && (
        <ModalDownload
          blob={blob}
          handlerDownloadClick={handlerDownloadClick}
        />
      )}
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

export default BudgetCreate;
