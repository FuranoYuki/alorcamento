import React, { useEffect, useState, memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { Container, Modal, ButtonCancel, Content, Download } from "./styles";

interface Props {
  blob: string;
  handlerDownloadClick: () => void;
}

const ModalDownload: React.FC<Props> = (Props) => {
  const [disable, setdisable] = useState(true);
  const [countdown, setcountdown] = useState<number | string>(4);

  const handlerCloseClick = () => {
    Props.handlerDownloadClick();
  };

  const handlerOutModalClick = (e: React.MouseEvent) => {
    const container = e.currentTarget as HTMLDivElement;

    if (container === e.target) {
      handlerCloseClick();
    }
  };

  useEffect(() => {
    if (countdown > 0 && typeof countdown == "number") {
      setTimeout(() => {
        setcountdown(() => (countdown as number) - 1);
      }, 1000);
    }
    if (countdown === 0) {
      setcountdown("Download pronto");
      setdisable(false);
    }
  }, [countdown]);

  return (
    <Container onClick={handlerOutModalClick}>
      <Modal>
        <ButtonCancel onClick={handlerCloseClick}>
          <FontAwesomeIcon icon={faTimes} />
        </ButtonCancel>
        <Content>{countdown}</Content>
        <Download
          disabled={disable}
          href={Props.blob}
          download="alopaper_orcamento.pdf"
        >
          Downlaod
        </Download>
      </Modal>
    </Container>
  );
};

export default memo(ModalDownload);
