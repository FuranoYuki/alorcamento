import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import {
  TableTr,
  ImageBox,
  TableTd,
  TableTdRemove,
  TableRemoveButton,
} from "./styles";

interface Props {
  id: string;
  name: string;
  area: string;
  image: string;
  qtd: string;
  value: string;
  handlerRemoveField: (e: React.MouseEvent) => void;
}

const BudgetAddProductField: React.FC<Props> = (Props) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const valor = Number(Props.qtd) * Number(Props.value);
    setTotal(Number(valor.toFixed(3)));
  }, []);

  return (
    <TableTr id={Props.id}>
      <TableTd>
        <ImageBox>
          <img src={Props.image} alt={Props.name} />
        </ImageBox>
      </TableTd>
      <TableTd>{Props.name}</TableTd>
      <TableTd>{Props.area}m²</TableTd>
      <TableTd>{Props.qtd}</TableTd>
      <TableTd>R$ {Props.value}</TableTd>
      <TableTd>R$ {total}</TableTd>
      <TableTdRemove>
        <TableRemoveButton onClick={Props.handlerRemoveField}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </TableRemoveButton>
      </TableTdRemove>
    </TableTr>
  );
};

export default BudgetAddProductField;
