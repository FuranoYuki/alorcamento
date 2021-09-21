import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import api from "../../service/http";
import { errorStyle } from "../Notifications";
import ICustomer from "../../interfaces/ICustomer";
import BudgetSelectCustomerField from "../BudgetSelectCustomerField";
import {
  Container,
  Modal,
  Header,
  Search,
  InputFilter,
  Content,
  ContentHeader,
  ContentHeaderField,
  Button,
} from "./styles";

interface Props {
  handlerSelected: (data: ICustomer) => void;
  handlerSearchClick: () => void;
}

const BudgetSelectCustomer: React.FC<Props> = (Props) => {
  const [name, setName] = useState("");
  const [customers, setCustomers] = useState<ICustomer[]>([]);
  const [customerSelected, setCustomerSelected] = useState<ICustomer>();

  const handlerCloseModal = () => {
    Props.handlerSearchClick();
  };

  const handlerClickOut = (e: React.MouseEvent) => {
    if (e.currentTarget == e.target) {
      handlerCloseModal();
    }
  };

  const handlerSelectedCustomer = (customer: ICustomer) => {
    setCustomerSelected(customer);
  };

  const handlerChangeInput = (e: React.ChangeEvent) => {
    const obj = e.currentTarget as HTMLInputElement;
    setName(obj.value);
  };

  const handlerSelectClick = () => {
    if (customerSelected !== undefined) Props.handlerSelected(customerSelected);
    handlerCloseModal();
  };

  const getCustomers = async () => {
    try {
      const res = await api.post("/alorcamentos/customer/findAll");
      setCustomers(res.data.customers);
    } catch (error) {
      toast.error(
        "Houve um problema ao carregar os clientes cadastrados, tente novamente mais tarde",
        errorStyle
      );
    }
  };

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <Container onClick={handlerClickOut}>
      <Modal>
        <Header>
          <FontAwesomeIcon icon={faTimes} onClick={handlerCloseModal} />
        </Header>
        <Search>
          <InputFilter
            type="text"
            placeholder="pequise um nome"
            onChange={handlerChangeInput}
          />
        </Search>
        <Content>
          <ContentHeader>
            <ContentHeaderField>Nome</ContentHeaderField>
            <ContentHeaderField>E-mail</ContentHeaderField>
            <ContentHeaderField>Estado</ContentHeaderField>
            <ContentHeaderField>Cidade</ContentHeaderField>
            <ContentHeaderField>Bairro</ContentHeaderField>
            <ContentHeaderField>Endereço</ContentHeaderField>
            <ContentHeaderField>CEP</ContentHeaderField>
            <ContentHeaderField>CPF</ContentHeaderField>
            <ContentHeaderField>CNPJ</ContentHeaderField>
            <ContentHeaderField>Telefone</ContentHeaderField>
          </ContentHeader>
          {customers &&
            customers
              .filter((customer) =>
                name !== ""
                  ? customer.name?.includes(name.toLowerCase().trim())
                  : customer
              )
              .map((customer) => (
                <BudgetSelectCustomerField
                  key={customer._id}
                  customer={customer}
                  handlerSelectedCustomer={handlerSelectedCustomer}
                />
              ))}
        </Content>
        <Button onClick={handlerSelectClick}>Selecionar Produto</Button>
      </Modal>
    </Container>
  );
};

export default BudgetSelectCustomer;
