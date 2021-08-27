import React, { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import IProduct from "../../interfaces/IProduct";
import {
  TableTr,
  ImageBox,
  TableTd,
  TableTdRemove,
  TableRemoveButton,
} from "./styles";

interface Props {
  product: IProduct;
  handlerRemoveField: (e: React.MouseEvent) => void;
}

const BudgetAddProductField: React.FC<Props> = (Props) => {
  return (
    <TableTr id={Props.product._id}>
      <TableTd>
        <ImageBox>
          <img src={Props.product.image} alt={Props.product.name} />
        </ImageBox>
      </TableTd>
      <TableTd>
        {Props.product.name}
        <br />
        <br /> acabamento em {Props.product.finish}
      </TableTd>
      <TableTd>
        {Props.product.width}m x {Props.product.height}m
      </TableTd>
      <TableTd>{Props.product.area}m²</TableTd>
      <TableTd>{Props.product.qtd}</TableTd>
      <TableTd>R$ {Props.product.value}</TableTd>
      <TableTd>R$ {Props.product.total}</TableTd>
      <TableTdRemove>
        <TableRemoveButton onClick={Props.handlerRemoveField}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </TableRemoveButton>
      </TableTdRemove>
    </TableTr>
  );
};

export default memo(BudgetAddProductField);
