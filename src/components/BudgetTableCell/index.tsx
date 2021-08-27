import React, { useState, useEffect, memo } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCalculator,
  faBoxOpen,
  faTrashAlt,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";

import IBudget from "../../interfaces/IBudget";
import { Container, Td, TdRemove, TdEdit } from "./styles";

interface Props {
  budget: IBudget;
  handlerDeleteRowClick: (id: string) => void;
}

const ProductTableCell: React.FC<Props> = (Props) => {
  const [date, setdate] = useState("");
  const [time, settime] = useState("");

  const handlerClick = () => {
    Props.handlerDeleteRowClick(Props.budget._id);
  };

  useEffect(() => {
    const dateInfo = new Date(Props.budget.createdAt);
    setdate(
      `${dateInfo.getDate()}/${
        dateInfo.getMonth() + 1
      }/${dateInfo.getFullYear()}`
    );
    settime(`${dateInfo.getHours()}:${dateInfo.getMinutes()}h`);
  }, [Props.budget.createdAt]);

  return (
    <Container>
      <Td> {Props.budget.name} </Td>
      <Td> {Props.budget.cpf} </Td>
      <Td> {Props.budget.cnpj} </Td>
      <Td> {Props.budget.city} </Td>
      <Td> {Props.budget.state} </Td>
      <Td> {Props.budget.qtd} </Td>
      <Td> R$ {Props.budget.total} </Td>
      <Td>
        {" "}
        {date} <br /> {time}{" "}
      </Td>
      <Td> {Props.budget.paid} </Td>
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
      <TdEdit>
        <Link to={`/budget/update/${Props.budget._id}`}>
          <FontAwesomeIcon icon={faEdit} />
        </Link>
      </TdEdit>
      <TdRemove onClick={handlerClick}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </TdRemove>
    </Container>
  );
};

export default memo(ProductTableCell);
