import React, { useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import api from "../../service/http";
import "react-toastify/dist/ReactToastify.css";
import { successStyle, errorStyle } from "../Notifications";
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

const CustomerFormCreate: React.FC = () => {
  const history = useHistory();

  const cpfRef = useRef<HTMLInputElement>(null);
  const cepRef = useRef<HTMLInputElement>(null);
  const cnpjRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const stateRef = useRef<HTMLSelectElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const neighborRef = useRef<HTMLInputElement>(null);
  const phoneNumberRef = useRef<HTMLInputElement>(null);

  const cpfEmptyRef = useRef<HTMLSpanElement>(null);
  const cnpjEmptyRef = useRef<HTMLSpanElement>(null);

  const cpfWarningRef = useRef<HTMLSpanElement>(null);
  const nameWarningRef = useRef<HTMLSpanElement>(null);
  const cnpjWarningRef = useRef<HTMLSpanElement>(null);
  const emailWarningRef = useRef<HTMLSpanElement>(null);

  const handlerFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const cpf = cpfRef.current as HTMLInputElement;
    const cep = cepRef.current as HTMLInputElement;
    const cnpj = cnpjRef.current as HTMLInputElement;
    const city = cityRef.current as HTMLInputElement;
    const name = nameRef.current as HTMLInputElement;
    const email = emailRef.current as HTMLInputElement;
    const state = stateRef.current as HTMLSelectElement;
    const address = addressRef.current as HTMLInputElement;
    const neighbor = neighborRef.current as HTMLInputElement;
    const phoneNumber = phoneNumberRef.current as HTMLInputElement;

    const cpfEmpty = cpfEmptyRef.current as HTMLSpanElement;
    const cnpjEmpty = cnpjEmptyRef.current as HTMLSpanElement;

    const cpfWarning = cpfWarningRef.current as HTMLSpanElement;
    const nameWarning = nameWarningRef.current as HTMLSpanElement;
    const cnpjWarning = cnpjWarningRef.current as HTMLSpanElement;
    const emailWarning = emailWarningRef.current as HTMLSpanElement;

    if (!name.value) {
      nameWarning.style.display = "flex";
      toast.error("Nome necessario para o cadastro", errorStyle);
    }

    if (!email.value) {
      emailWarning.style.display = "flex";
      toast.error("Email necessario para o cadastro", errorStyle);
    }

    if (cpf.value.length < 11) {
      cpfEmpty.style.display = "flex";
      toast.error("CPF incorreto", errorStyle);
    }

    if (cnpj.value.length < 14) {
      cnpjEmpty.style.display = "flex";
      toast.error("CNPJ incorreto", errorStyle);
    }

    if (name.value) {
      nameWarning.style.display = "none";
    }

    if (email.value) {
      emailWarning.style.display = "none";
    }

    if (cpf.value) {
      cpfEmpty.style.display = "none";
    }

    if (cnpj.value) {
      cnpjEmpty.style.display = "none";
    }

    if (name.value != "" && email.value != "") {
      api
        .post("/alorcamentos/customer/create", {
          cpf: cpf.value.trim(),
          cep: cep.value.trim(),
          city: city.value.trim(),
          cnpj: cnpj.value.trim(),
          name: name.value.trim(),
          state: state.value.trim(),
          email: email.value.trim(),
          address: address.value.trim(),
          neighbor: neighbor.value.trim(),
          phoneNumber: phoneNumber.value.trim(),
        })
        .then(() => {
          toast.success("Cliente Cadastrado", successStyle);

          setTimeout(() => {
            history.push("/customer");
          }, 3000);
        })
        .catch((error) => {
          toast.error("Problema ao cadastrar Cliente", errorStyle);

          const problem = error.response.data as ApiError;
          if (problem.emailExist) {
            emailWarning.style.display = "flex";
            emailWarning.innerText = "e-mail já cadastrado";
          }
          if (problem.cnpjExist) {
            cnpjWarning.style.display = "flex";
          }
          if (problem.cpfExist) {
            cnpjWarning.style.display = "none";
            cpfWarning.style.display = "flex";
          }
        });
    }
  };

  const handlerBackClick = () => {
    history.goBack();
  };

  const handlerCEPBlur = (e: React.FocusEvent) => {
    const obj = e.currentTarget as HTMLInputElement;
    axios
      .get(`https://viacep.com.br/ws/${obj.value.trim()}/json/`)
      .then((res) => {
        const city = cityRef.current as HTMLInputElement;
        const state = stateRef.current as HTMLSelectElement;
        const address = addressRef.current as HTMLInputElement;
        const neighbor = neighborRef.current as HTMLInputElement;

        state.value = res.data.uf;
        city.value = res.data.localidade;
        neighbor.value = res.data.bairro;
        address.value = res.data.logradouro;

        toast.success("CEP encontrado", successStyle);
      })
      .catch(() => {
        toast.error("CEP nao encontrado", errorStyle);
      });
  };

  return (
    <Container>
      <Form onSubmit={handlerFormSubmit}>
        <Inputs>
          <Field>
            <Header>
              <Label htmlFor="name">Name</Label>
              <span ref={nameWarningRef}>campo obrigatório</span>
            </Header>
            <Input id="name" name="name" ref={nameRef} />
          </Field>
          <Field>
            <Header>
              <Label htmlFor="email">E-mail</Label>
              <span ref={emailWarningRef}>campo obrigatório</span>
            </Header>
            <Input id="email" name="email" ref={emailRef} />
          </Field>
          <Field>
            <Header>
              <Label htmlFor="cpf">CPF</Label>
              <span ref={cpfWarningRef}>CPF já cadastrado</span>
              <span ref={cpfEmptyRef}>CPF possui no mínimo 11 algarismos</span>
            </Header>
            <Input id="cpf" name="cpf" ref={cpfRef} />
          </Field>
          <Field>
            <Header>
              <Label htmlFor="cep">CEP</Label>
              <span>Error</span>
            </Header>
            <Input id="cep" name="cep" ref={cepRef} onBlur={handlerCEPBlur} />
          </Field>
          <Field>
            <Header>
              <Label htmlFor="city">Cidade</Label>
              <span>Error</span>
            </Header>
            <Input id="city" name="city" ref={cityRef} />
          </Field>
          <Field>
            <Header>
              <Label htmlFor="state">Estado</Label>
              <span>Error</span>
            </Header>
            <Select id="state" name="state" ref={stateRef}>
              <option value=""></option>
              <option value="AC">AC</option>
              <option value="AL">AL</option>
              <option value="AP">AP</option>
              <option value="AM">AM</option>
              <option value="BA">BA</option>
              <option value="CE">CE</option>
              <option value="DF">DF</option>
              <option value="ES">ES</option>
              <option value="GO">GO</option>
              <option value="MA">MA</option>
              <option value="MT">MT</option>
              <option value="MS">MS</option>
              <option value="MG">MG</option>
              <option value="PA">PA</option>
              <option value="PB">PB</option>
              <option value="PR">PR</option>
              <option value="PE">PE</option>
              <option value="PI">PI</option>
              <option value="RJ">RJ</option>
              <option value="RN">RN</option>
              <option value="RD">RD</option>
              <option value="RO">RO</option>
              <option value="RR">RR</option>
              <option value="SC">SC</option>
              <option value="SP">SP</option>
              <option value="SE">SE</option>
              <option value="TO">TO</option>
            </Select>
          </Field>
          <Field>
            <Header>
              <Label htmlFor="neighbor">Bairro</Label>
              <span>Error</span>
            </Header>
            <Input id="neighbor" name="neighbor" ref={neighborRef} />
          </Field>
          <Field>
            <Header>
              <Label htmlFor="address">Endereço</Label>
              <span>Error</span>
            </Header>
            <Input id="address" name="address" ref={addressRef} />
          </Field>
          <Field>
            <Header>
              <Label htmlFor="cnpj">CNPJ</Label>
              <span ref={cnpjWarningRef}>CNPJ já cadastrado</span>
              <span ref={cnpjEmptyRef}>
                CNPJ deve ter no minimo 14 algarismo
              </span>
            </Header>
            <Input id="cnpj" name="cnpj" ref={cnpjRef} />
          </Field>
          <Field>
            <Header>
              <Label htmlFor="phoneNumber">Telefone</Label>
              <span>Error</span>
            </Header>
            <Input id="phoneNumber" name="phoneNumber" ref={phoneNumberRef} />
          </Field>
        </Inputs>
        <Buttons>
          <ButtonBack type="button" onClick={handlerBackClick}>
            Voltar
          </ButtonBack>
          <Button type="submit">Cadastrar</Button>
        </Buttons>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Form>
    </Container>
  );
};

export default CustomerFormCreate;
