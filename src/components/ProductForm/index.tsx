import React from "react";

import {
  Container,
  Form,
  Inputs,
  Field,
  Header,
  Label,
  Input,
  Select,
  Button,
} from "./styles";

interface Props {
  update?: boolean;
}

const ProductForm: React.FC<Props> = (props: Props) => {
  return (
    <Container>
      <Form>
        <Inputs>
          <Field>
            <Header>
              <Label htmlFor="name">Name</Label>
              <span>Error</span>
            </Header>
            <Input id="name" name="name" />
          </Field>
          <Field>
            <Header>
              <Label htmlFor="value">Valor</Label>
              <span>Error</span>
            </Header>
            <Input id="value" name="value" />
          </Field>
          <Field>
            <Header>
              <Label htmlFor="finish">acabamento</Label>
              <span>Error</span>
            </Header>
            <Select id="finish" name="finish">
              <option value="papelao">Papelao</option>
              <option value="carne">Carne</option>
            </Select>
          </Field>
          <Field>
            <Header>
              <Label htmlFor="type">Tipo</Label>
              <span>Error</span>
            </Header>
            <Select id="type" name="type">
              <option value="papelao">papel de parede</option>
              <option value="carne">poster</option>
            </Select>
          </Field>
          <Field>
            <Header>
              <Label htmlFor="code">Codigo</Label>
              <span>Error</span>
            </Header>
            <Input id="code" name="code" />
          </Field>
        </Inputs>
        <Button>{props.update ? "Atualizar" : "Cadastrar"}</Button>
      </Form>
    </Container>
  );
};

export default ProductForm;
