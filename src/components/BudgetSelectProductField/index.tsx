import React, { memo } from "react";

import { Container, Field } from "./styles";

interface Product {
  _id?: string;
  name: string;
  value: string;
  finish: string;
}

interface Props {
  product: Product;
  handlerSelectedProduct: (product: Product) => void;
}

const BudgetSelectProductField: React.FC<Props> = (Props) => {
  const handlerRowClick = (e: React.MouseEvent) => {
    const obj = e.currentTarget as HTMLDivElement;

    const row = document.querySelectorAll(".row");
    row.forEach((data) => {
      if (data !== obj) {
        const unmark = data as HTMLDivElement;
        unmark.style.backgroundColor = "transparent";
      }
    });

    obj.style.backgroundColor = "var(--pink-dark-color)";

    Props.handlerSelectedProduct({
      name: Props.product.name,
      value: Props.product.value,
      finish: Props.product.finish,
    });
  };

  return (
    <Container className="row" onClick={handlerRowClick}>
      <Field> {Props.product.name} </Field>
      <Field> {Props.product.finish} </Field>
      <Field> R$ {Props.product.value} </Field>
    </Container>
  );
};

export default memo(BudgetSelectProductField);
