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

const CustomerFormCreate: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const cpfRef = useRef<HTMLInputElement>(null);
  const cepRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const stateRef = useRef<HTMLSelectElement>(null);
  const neighborRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const cnpjRef = useRef<HTMLInputElement>(null);
  const phoneNumberRef = useRef<HTMLInputElement>(null);

  const nameWarningRef = useRef<HTMLSpanElement>(null);
  const emailWarningRef = useRef<HTMLSpanElement>(null);
  const cpfWarningRef = useRef<HTMLSpanElement>(null);
  const cnpjWarningRef = useRef<HTMLSpanElement>(null);

  const history = useHistory();

  const handlerFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const name = nameRef.current as HTMLInputElement;
    const email = emailRef.current as HTMLInputElement;
    const cpf = cpfRef.current as HTMLInputElement;
    const cep = cepRef.current as HTMLInputElement;
    const city = cityRef.current as HTMLInputElement;
    const state = stateRef.current as HTMLSelectElement;
    const neighbor = neighborRef.current as HTMLInputElement;
    const address = addressRef.current as HTMLInputElement;
    const cnpj = cnpjRef.current as HTMLInputElement;
    const phoneNumber = phoneNumberRef.current as HTMLInputElement;
    const nameWarning = nameWarningRef.current as HTMLSpanElement;
    const emailWarning = emailWarningRef.current as HTMLSpanElement;
    const cnpjWarning = cnpjWarningRef.current as HTMLSpanElement;
    const cpfWarning = cpfWarningRef.current as HTMLSpanElement;

    if (!name.value) {
      nameWarning.style.display = "flex";
    }

    if (!email.value) {
      emailWarning.style.display = "flex";
    }

    if (name.value) {
      nameWarning.style.display = "none";
    }

    if (email.value) {
      emailWarning.style.display = "none";
    }

    if (name.value != "" && email.value != "") {
      api
        .post("/alorcamentos/customer/create", {
          name: name.value,
          email: email.value,
          cpf: cpf.value,
          cep: cep.value,
          city: city.value,
          state: state.value,
          neighbor: neighbor.value,
          address: address.value,
          cnpj: cnpj.value,
          phoneNumber: phoneNumber.value,
        })
        .then(() => {
          history.push("/customer");
        })
        .catch((error) => {
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
            </Header>
            <Input id="cpf" name="cpf" ref={cpfRef} />
          </Field>
          <Field>
            <Header>
              <Label htmlFor="cep">CEP</Label>
              <span>Error</span>
            </Header>
            <Input id="cep" name="cep" ref={cepRef} />
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
              <option value="Acre">Acre</option>
              <option value="Alagoas">Alagoas</option>
              <option value="Amapá">Amapá</option>
              <option value="Amazonas">Amazonas</option>
              <option value="Bahia">Bahia</option>
              <option value="Ceará">Ceará</option>
              <option value="Distrito Federal">Distrito Federal</option>
              <option value="Espírito Santo">Espírito Santo</option>
              <option value="Goiás">Goiás</option>
              <option value="Maranhão">Maranhão</option>
              <option value="Mato Grosso">Mato Grosso</option>
              <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
              <option value="Minas Gerais">Minas Gerais</option>
              <option value="Pará">Pará</option>
              <option value="Paraíba">Paraíba</option>
              <option value="Paraná">Paraná</option>
              <option value="Pernambuco">Pernambuco</option>
              <option value="Piauí">Piauí</option>
              <option value="Rio de Janeiro">Rio de Janeiro</option>
              <option value="Rio Grande do Norte">Rio Grande do Norte</option>
              <option value="Rio Grande do Sul">Rio Grande do Sul</option>
              <option value="Rondônia">Rondônia</option>
              <option value="Roraima">Roraima</option>
              <option value="Santa Catarina">Santa Catarina</option>
              <option value="São Paulo">São Paulo</option>
              <option value="Sergipe">Sergipe</option>
              <option value="Tocantins">Tocantins</option>
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
      </Form>
    </Container>
  );
};

export default CustomerFormCreate;
