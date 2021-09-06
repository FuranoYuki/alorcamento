import React, { memo } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import { Container, Td, TdRemove } from "./styles";

interface Customer {
  _id: string;
  name?: string;
  phoneNumber?: string;
  address?: string;
  city?: string;
  state?: string;
  neighbor?: string;
  cep?: string;
  email?: string;
  cnpj?: string;
  cpf?: string;
}

interface Props {
  customer: Customer;
  handlerDeleteModal: (id: string) => void;
}

const CustomerTableCell: React.FC<Props> = (Props) => {
  const handlerDeleteClick = () => {
    Props.handlerDeleteModal(Props.customer._id);
  };

  return (
    <Container>
      <Td> {Props.customer.name} </Td>
      <Td> {Props.customer.email} </Td>
      <Td> {Props.customer.state} </Td>
      <Td> {Props.customer.city} </Td>
      <Td> {Props.customer.neighbor} </Td>
      <Td> {Props.customer.address} </Td>
      <Td> {Props.customer.cep} </Td>
      <Td> {Props.customer.cpf} </Td>
      <Td> {Props.customer.cnpj} </Td>
      <Td> {Props.customer.phoneNumber} </Td>
      <Td>
        <Link to={`/customer/update/${Props.customer._id}`}>
          <FontAwesomeIcon icon={faEdit} />
        </Link>
      </Td>
      <TdRemove onClick={handlerDeleteClick}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </TdRemove>
    </Container>
  );
};

export default memo(CustomerTableCell);
