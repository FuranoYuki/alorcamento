import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import { Container, Td, TdRemove } from "./styles";

const ProductTableCell: React.FC = () => {
  return (
    <Container>
      <Td> código </Td>
      <Td> nome </Td>
      <Td> acabamento </Td>
      <Td> valor </Td>
      <Td>
        <Link to={`/product`}>
          <FontAwesomeIcon icon={faEdit} />
        </Link>
      </Td>
      <TdRemove>
        <FontAwesomeIcon icon={faTrashAlt} />
      </TdRemove>
    </Container>
  );
};

export default ProductTableCell;
