import React, { useRef } from "react";
import { useHistory } from "react-router-dom";

// import api from "../../service/http";
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

const ProductFormCreate: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const valueRef = useRef<HTMLInputElement>(null);
  const finishRef = useRef<HTMLSelectElement>(null);

  const nameWarningRef = useRef<HTMLSpanElement>(null);
  const valueWarningRef = useRef<HTMLSpanElement>(null);
  const finishWarningRef = useRef<HTMLSpanElement>(null);

  const history = useHistory();

  const handlerFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = nameRef.current as HTMLInputElement;
    const price = valueRef.current as HTMLInputElement;
    const finish = finishRef.current as HTMLSelectElement;

    const nameWarning = nameWarningRef.current as HTMLSpanElement;
    const valueWarning = valueWarningRef.current as HTMLSpanElement;
    const finishWarning = finishWarningRef.current as HTMLSpanElement;

    !name.value
      ? (nameWarning.style.display = "flex")
      : (nameWarning.style.display = "none");

    !price.value
      ? (valueWarning.style.display = "flex")
      : (valueWarning.style.display = "none");

    !finish.value
      ? (finishWarning.style.display = "flex")
      : (finishWarning.style.display = "none");

    if (name.value != "" && price.value != "" && finish.value) {
      console.log("do call");
    }
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
              <span ref={nameWarningRef}>campo obrigatório</span>
              <Label htmlFor="name">Nome</Label>
            </Header>
            <Input id="name" name="name" ref={nameRef} />
          </Field>
          <Field>
            <Header>
              <span ref={finishWarningRef}>Defina um Acabamento</span>
              <Label htmlFor="finish">Acabamento</Label>
            </Header>
            <Select id="finish" name="finish" ref={finishRef}>
              <option value=""></option>
              <option value="pedra">pedra</option>
              <option value="madeira">madeira</option>
            </Select>
          </Field>
          <Field>
            <Header>
              <span ref={valueWarningRef}>Defina um valor</span>
              <Label htmlFor="value">Valor</Label>
            </Header>
            <Input id="value" name="value" ref={valueRef} />
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
