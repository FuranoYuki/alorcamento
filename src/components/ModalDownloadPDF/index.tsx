import React, { forwardRef, useState, useEffect } from "react";

import PDFDownload from "../PDFDownload";
import { Container, Modal, Header, Button } from "./styles";

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

interface Props {
  showModal: boolean;
  hadlerCloseModal: () => void;
  customer: Customer;
  products: Product[];
}

const ModalDownloadPDF: React.ForwardRefRenderFunction<HTMLDivElement, Props> =
  // eslint-disable-next-line react/prop-types
  ({ showModal, hadlerCloseModal, customer, products }, ref) => {
    const [modal, setmodal] = useState(false);

    const handlerContainerClick = (e: React.MouseEvent) => {
      if (e.currentTarget === e.target) {
        hadlerCloseModal();
      }
    };

    useEffect(() => {
      setmodal(showModal);
    }, [showModal]);

    return (
      <Container ref={ref} onClick={handlerContainerClick}>
        <Modal>
          <Header>Aguarde um momento para o download ficar pronto !!</Header>
          {modal && (
            <Button
              fileName="alorcamento.pdf"
              document={<PDFDownload products={products} customer={customer} />}
            >
              {({ loading }) =>
                loading ? "Loading orçamento..." : "Download pronto"
              }
            </Button>
          )}
        </Modal>
      </Container>
    );
  };

export default forwardRef(ModalDownloadPDF);
