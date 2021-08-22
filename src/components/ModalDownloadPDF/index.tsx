import React, { forwardRef, useState, useEffect } from "react";

import PDFDownload from "../PDFDownload";
import IProduct from "../../interfaces/IProduct";
import ICustomer from "../../interfaces/ICustomer";
import { Container, Modal, Header, Button } from "./styles";

interface Props {
  showModal: boolean;
  hadlerCloseModal: () => void;
  customer: ICustomer;
  products: IProduct[];
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
