import React, { memo } from "react";

import ICustomer from "../../interfaces/ICustomer";
import { Container, Field } from "./styles";

interface Props {
  customer: ICustomer;
  handlerSelectedCustomer: (product: ICustomer) => void;
}

const BudgetSelectCustomerField: React.FC<Props> = (Props) => {
  const handlerRowClick = (e: React.MouseEvent) => {
    const obj = e.currentTarget as HTMLDivElement;

    const row = document.querySelectorAll(".rowCustomer");
    row.forEach((data) => {
      if (data !== obj) {
        const unmark = data as HTMLDivElement;
        unmark.style.backgroundColor = "transparent";
      }
    });

    obj.style.backgroundColor = "var(--pink-dark-color)";

    Props.handlerSelectedCustomer({
      name: Props.customer.name,
      email: Props.customer.email,
      state: Props.customer.state,
      city: Props.customer.city,
      neighbor: Props.customer.neighbor,
      address: Props.customer.address,
      cep: Props.customer.cep,
      cpf: Props.customer.cpf,
      cnpj: Props.customer.cnpj,
      phoneNumber: Props.customer.phoneNumber,
    });
  };

  return (
    <Container className="rowCustomer" onClick={handlerRowClick}>
      <Field> {Props.customer.name} </Field>
      <Field> {Props.customer.email} </Field>
      <Field> {Props.customer.state} </Field>
      <Field> {Props.customer.city} </Field>
      <Field> {Props.customer.neighbor} </Field>
      <Field> {Props.customer.address} </Field>
      <Field> {Props.customer.cep} </Field>
      <Field> {Props.customer.cpf} </Field>
      <Field> {Props.customer.cnpj} </Field>
      <Field> {Props.customer.phoneNumber} </Field>
    </Container>
  );
};

export default memo(BudgetSelectCustomerField);
