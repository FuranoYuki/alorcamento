import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

import api from "../../service/http";
import { Container, Table, THeader, TBody, Field } from "./styles";
import CustomerTableCell from "../CustomerTableCell";

interface Customer {
  _id: string;
  name: string;
  phoneNumber?: string;
  address?: string;
  city?: string;
  state?: string;
  neighbor?: string;
  cep?: string;
  email: string;
  cnpj?: string;
  cpf?: string;
}

const CustomerTable: React.FC = () => {
  const [customers, setcustomers] = useState<Customer[]>([]);

  const handlerDeleteRowClick = (id: string) => {
    api
      .post("/alorcamentos/customer/delete", { id })
      .then((res) => {
        setcustomers(res.data.customers);
      })
      .catch((error) => {
        console.log("failed at delete customer", error);
      });
  };

  useEffect(() => {
    api
      .post("/alorcamentos/customer/findAll")
      .then((res) => {
        setcustomers(res.data.customers);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
            <span>E-mail</span>
          </Field>
          <Field>
            <FontAwesomeIcon icon={faChevronUp} />
            <span>Estado</span>
          </Field>
          <Field>
            <FontAwesomeIcon icon={faChevronUp} />
            <span>Cidade</span>
          </Field>
          <Field>
            <FontAwesomeIcon icon={faChevronUp} />
            <span>Bairro</span>
          </Field>
          <Field>
            <FontAwesomeIcon icon={faChevronUp} />
            <span>Endereço</span>
          </Field>
          <Field>
            <FontAwesomeIcon icon={faChevronUp} />
            <span>CEP</span>
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
            <span>Telefone</span>
          </Field>
          <Field>
            <span>Editar</span>
          </Field>
          <Field>
            <span>Excluir</span>
          </Field>
        </THeader>
        <TBody>
          {customers.map((customer) => (
            <CustomerTableCell
              customer={customer}
              handlerDeleteRowClick={handlerDeleteRowClick}
              key={customer._id}
            />
          ))}
        </TBody>
      </Table>
    </Container>
  );
};

export default CustomerTable;
