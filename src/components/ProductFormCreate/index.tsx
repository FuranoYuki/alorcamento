import React, { useRef } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import api from "../../service/http";
import { successStyle, errorStyle } from "../Notifications";
import {
  Container,
  Form,
  Inputs,
  Field,
  Header,
  Label,
  Input,
  Buttons,
  Button,
  ButtonBack,
} from "./styles";

const ProductFormCreate: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const valueRef = useRef<HTMLInputElement>(null);
  const finishRef = useRef<HTMLInputElement>(null);

  const nameWarningRef = useRef<HTMLSpanElement>(null);
  const valueWarningRef = useRef<HTMLSpanElement>(null);
  const finishWarningRef = useRef<HTMLSpanElement>(null);

  const history = useHistory();

  const inputChangeHandler = (e: React.ChangeEvent) => {
    const obj = e.currentTarget as HTMLInputElement;
    obj.value = obj.value.trim().replace(/[^\d.,]/g, "");
  };

  const handlerBackClick = () => {
    history.goBack();
  };

  const getCurrent = () => {
    const name = nameRef.current as HTMLInputElement;
    const price = valueRef.current as HTMLInputElement;
    const finish = finishRef.current as HTMLInputElement;

    const nameWarning = nameWarningRef.current as HTMLSpanElement;
    const valueWarning = valueWarningRef.current as HTMLSpanElement;
    const finishWarning = finishWarningRef.current as HTMLSpanElement;

    return {
      name,
      price,
      finish,
      nameWarning,
      valueWarning,
      finishWarning,
    };
  };

  const handlerEmptyInputValue = () => {
    const { name, price, finish, nameWarning, valueWarning, finishWarning } =
      getCurrent();

    !name.value
      ? (nameWarning.style.display = "flex")
      : (nameWarning.style.display = "none");

    !price.value
      ? (valueWarning.style.display = "flex")
      : (valueWarning.style.display = "none");

    !finish.value
      ? (finishWarning.style.display = "flex")
      : (finishWarning.style.display = "none");
  };

  const handlerFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, price, finish } = getCurrent();

    handlerEmptyInputValue();

    if (name.value != "" && price.value != "" && finish.value != "") {
      toast.info("Fazendo o cadastro de produto..", successStyle);

      api
        .post("/alorcamentos/product/create", {
          name: name.value.toLowerCase().trim(),
          finish: finish.value.trim().replace(",", "."),
          value: price.value.toLowerCase().trim().replace(",", "."),
        })
        .then((res) => {
          if (res.data.productCreate) {
            toast.success("Produto cadastro com sucesso", successStyle);
          }
        })
        .catch(() => {
          toast.error(
            "Erro ao cadastrar o produto, tente novamente mais tarde",
            errorStyle
          );
        });

      setTimeout(() => {
        history.push("/product");
      }, 2000);
    } else {
      toast.error("Preencha todos os campos para fazer o cadastro", errorStyle);
    }
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
            <Input id="finish" name="finish" ref={finishRef} />
          </Field>
          <Field>
            <Header>
              <span ref={valueWarningRef}>Defina um valor</span>
              <Label htmlFor="value">Valor Unit.</Label>
            </Header>
            <Input
              id="value"
              name="value"
              ref={valueRef}
              onChange={inputChangeHandler}
            />
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
