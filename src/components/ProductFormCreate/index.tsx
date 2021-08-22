import React, { useRef } from "react";
import { useHistory } from "react-router-dom";

import api from "../../service/http";
import {
  Container,
  Form,
  Inputs,
  Field,
  Header,
  Label,
  Input,
  Select,
  Buttons,
  Button,
  ButtonBack,
} from "./styles";

interface ApiError {
  emailExist?: boolean;
  cpfExist?: boolean;
  cnpjExist?: boolean;
}

const ProductFormCreate: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const finishRef = useRef<HTMLSelectElement>(null);
  const valueRef = useRef<HTMLInputElement>(null);

  const nameWarningRef = useRef<HTMLSpanElement>(null);
  const emailWarningRef = useRef<HTMLSpanElement>(null);
  const cpfWarningRef = useRef<HTMLSpanElement>(null);
  const cnpjWarningRef = useRef<HTMLSpanElement>(null);

  const history = useHistory();

  const handlerFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = nameRef.current as HTMLInputElement;
    const finish = finishRef.current as HTMLSelectElement;
    const value = valueRef.current as HTMLInputElement;
    const nameWarning = nameWarningRef.current as HTMLSpanElement;
    const emailWarning = emailWarningRef.current as HTMLSpanElement;
    const cnpjWarning = cnpjWarningRef.current as HTMLSpanElement;
    const cpfWarning = cpfWarningRef.current as HTMLSpanElement;

    // if (!name.value) {
    //   nameWarning.style.display = "flex";
    // }

    // if (!email.value) {
    //   emailWarning.style.display = "flex";
    // }

    // if (name.value) {
    //   nameWarning.style.display = "none";
    // }

    // if (email.value) {
    //   emailWarning.style.display = "none";
    // }

    // if (name.value != "" && email.value != "") {
    //   // API
    // }
  };

  const handlerBackClick = () => {
    history.goBack();
  };

  return (
    <Container>
      <Form onSubmit={handlerFormSubmit}>
        <Inputs>
          <Field>
            <Header>
              <Label htmlFor="name">Nome</Label>
              <span ref={emailWarningRef}>campo obrigatório</span>
            </Header>
            <Input id="name" name="name" ref={nameRef} />
          </Field>
          <Field>
            <Header>
              <Label htmlFor="finish">Acabamento</Label>
              <span>Error</span>
            </Header>
            <Select id="finish" name="finish" ref={finishRef}>
              <option value=""></option>
              <option value="pedra">pedra</option>
              <option value="madeira">madeira</option>
            </Select>
          </Field>
          <Field>
            <Header>
              <Label htmlFor="value">Bairro</Label>
              <span>Error</span>
            </Header>
            <Input id="neighbor" name="neighbor" ref={valueRef} />
          </Field>
        </Inputs>
        <Buttons>
          <ButtonBack type="button" onClick={handlerBackClick}>
            Voltar
          </ButtonBack>
          <Button type="submit">Cadastrar</Button>
        </Buttons>
      </Form>
    </Container>
  );
};

export default ProductFormCreate;
