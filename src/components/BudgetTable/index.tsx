import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

import { Container, Table, THeader, TBody, Field } from "./styles";

const BudgetTable: React.FC = () => {
  return (
    <Container>
      <Table>
        <THeader>
          <Field>
            <FontAwesomeIcon icon={faChevronUp} />
            <span>Nome</span>
          </Field>
          <Field>
            <FontAwesomeIcon icon={faChevronUp} />
            <span>CPF</span>
          </Field>
          <Field>
            <FontAwesomeIcon icon={faChevronUp} />
            <span>CNPJ</span>
          </Field>
          <Field>
            <FontAwesomeIcon icon={faChevronUp} />
            <span>QTD</span>
          </Field>
          <Field>
            <FontAwesomeIcon icon={faChevronUp} />
            <span>Total</span>
          </Field>
          <Field>
            <FontAwesomeIcon icon={faChevronUp} />
            <span>Data Criacao</span>
          </Field>
          <Field>
            <span>Visualizar</span>
          </Field>
          <Field>
            <span>Excluir</span>
          </Field>
        </THeader>
        <TBody></TBody>
      </Table>
    </Container>
  );
};

export default BudgetTable;
