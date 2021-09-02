import React, { useRef, useEffect } from "react";
import { toast } from "react-toastify";
import { useHistory, useParams } from "react-router-dom";

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

interface Params {
  id: string;
}

const ProductFormUpdate: React.FC = () => {
  const history = useHistory();

  const { id } = useParams<Params>();

  const nameRef = useRef<HTMLInputElement>(null);
  const valueRef = useRef<HTMLInputElement>(null);
  const finishRef = useRef<HTMLInputElement>(null);

  const nameWarningRef = useRef<HTMLSpanElement>(null);
  const valueWarningRef = useRef<HTMLSpanElement>(null);
  const finishWarningRef = useRef<HTMLSpanElement>(null);

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
        .post("/alorcamentos/product/update", {
          id,
          name: name.value.toLowerCase().trim(),
          finish: finish.value.trim(),
          value: price.value.toLowerCase().trim(),
        })
        .then((res) => {
          if (res.data.productCreate) {
            toast.success("Produto atualizado com sucesso", successStyle);
          }
        })
        .catch(() => {
          toast.error(
            "Erro ao atualizar o produto, tente novamente mais tarde",
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

  const getProduct = () => {
    api
      .post("/alorcamentos/product/findOne", {
        id,
      })
      .then((res) => {
        const { name, price, finish } = getCurrent();

        name.value = res.data.product.name;
        price.value = res.data.product.value;
        finish.value = res.data.product.finish;
      })
      .catch(() => {
        toast.error(
          "Erro ao carregar o produto, tente novamente mais tarde",
          errorStyle
        );
        setTimeout(() => {
          history.push("/product");
        }, 2000);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

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
          <Button type="submit">Atualizar</Button>
        </Buttons>
      </Form>
    </Container>
  );
};

export default ProductFormUpdate;
