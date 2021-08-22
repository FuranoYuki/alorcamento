import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

import ProductTableCell from "../ProductTableCell";
import { Container, Table, THeader, TBody, Field } from "./styles";

const ProductTable: React.FC = () => {
  return (
    <Container>
      <Table>
        <THeader>
          <Field>
            <FontAwesomeIcon icon={faChevronUp} />
            <span>Código</span>
          </Field>
          <Field>
            <FontAwesomeIcon icon={faChevronUp} />
            <span>Nome</span>
          </Field>
          <Field>
            <FontAwesomeIcon icon={faChevronUp} />
            <span>Acabamento</span>
          </Field>
          <Field>
            <FontAwesomeIcon icon={faChevronUp} />
            <span>valor</span>
          </Field>
          <Field>
            <span>Editar</span>
          </Field>
          <Field>
            <span>Excluir</span>
          </Field>
        </THeader>
        <TBody>
          <ProductTableCell />
        </TBody>
      </Table>
    </Container>
  );
};

export default ProductTable;
