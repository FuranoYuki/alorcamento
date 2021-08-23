import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../../service/http";
import { Container } from "./styles";

interface Params {
  id: string;
  type: string;
}

const PDFView: React.FC = () => {
  const [pdf, setpdf] = useState("");
  const { id } = useParams<Params>();

  useEffect(() => {
    api
      .post("/alorcamentos/budget/findOnePdf", { id })
      .then((res) => {
        setpdf(res.data.pdf);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <iframe src={pdf} />
    </Container>
  );
};

export default PDFView;
