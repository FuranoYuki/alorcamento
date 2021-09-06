import React, { memo } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import { Container, Td, TdRemove } from "./styles";

interface Product {
  _id: string;
  name: string;
  value: string;
  finish: string;
}

interface Props {
  product: Product;
  handlerDeleteModal: (id: string) => void;
}

const ProductTableCell: React.FC<Props> = (Props) => {
  const handlerRemoveClick = () => {
    Props.handlerDeleteModal(Props.product._id);
  };

  return (
    <Container>
      <Td> {Props.product.name} </Td>
      <Td> {Props.product.finish} </Td>
      <Td> R$ {Props.product.value} </Td>
      <Td>
        <Link to={`/product/update/${Props.product._id}`}>
          <FontAwesomeIcon icon={faEdit} />
        </Link>
      </Td>
      <TdRemove onClick={handlerRemoveClick}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </TdRemove>
    </Container>
  );
};

export default memo(ProductTableCell);
