import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import { Container, Td } from "./styles";

interface Props {
  name: string;
  code?: string;
  type?: string;
  value: string;
  finish?: string;
  description?: string;
}

const ProductTableCell: React.FC<Props> = (props: Props) => {
  return (
    <Container>
      <Td>{props.name}</Td>
      <Td>{props.value}</Td>
      <Td>papel de parede</Td>
      <Td>papel</Td>
      <Td>b0123u0</Td>
      <Td>
        <Link to="/product/update">
          <FontAwesomeIcon icon={faEdit} />
        </Link>
      </Td>
      <Td>
        <FontAwesomeIcon icon={faTrashAlt} />
      </Td>
    </Container>
  );
};

export default ProductTableCell;
