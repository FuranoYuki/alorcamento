import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalculator,
  faBoxOpen,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

import IBudget from "../../interfaces/IBudget";
import { Container, Td, TdRemove } from "./styles";

interface Props {
  budget: IBudget;
  handlerDeleteRowClick: (id: string) => void;
}

const ProductTableCell: React.FC<Props> = (Props) => {
  const handlerClick = () => {
    Props.handlerDeleteRowClick(Props.budget._id);
  };

  return (
    <Container>
      <Td> {Props.budget.name} </Td>
      <Td> {Props.budget.cpf} </Td>
      <Td> {Props.budget.cnpj} </Td>
      <Td> {Props.budget.city} </Td>
      <Td> {Props.budget.state} </Td>
      <Td> {Props.budget.qtd} </Td>
      <Td> {Props.budget.total} </Td>
      <Td> {Props.budget.createdAt} </Td>
      <Td>
        <Link
          to={`/budget/pdf/budget/${Props.budget.budgetPDF}`}
          target="_blank"
        >
          <FontAwesomeIcon icon={faCalculator} />
        </Link>
      </Td>
      <Td>
        <Link to={`/budget/pdf/guia/${Props.budget.guiaPDF}`} target="_blank">
          <FontAwesomeIcon icon={faBoxOpen} />
        </Link>
      </Td>
      <TdRemove onClick={handlerClick}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </TdRemove>
    </Container>
  );
};

export default ProductTableCell;
