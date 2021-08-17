import React, { useRef } from "react";

import api from "../../service/http";
import {
  Container,
  Header,
  Fields,
  Field,
  Label,
  Input,
  Select,
  AutoCode,
  Button,
  AutoInputs,
  AutoInput,
  WarningError,
  WarningExist,
  Warning,
  CodeInput,
} from "./styles";

interface Customer {
  name?: string;
  phoneNumber?: string;
  address?: string;
  city?: string;
  state?: string;
  neighbor?: string;
  cep?: string;
  email?: string;
  cnpj?: string;
  cpf?: string;
}

interface Props {
  handlerCustomer: (cust: Customer) => void;
}

const BudgetAddCustomer: React.FC<Props> = (Props) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneNumberRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const stateRef = useRef<HTMLSelectElement>(null);
  const neighborRef = useRef<HTMLInputElement>(null);
  const cepRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const cnpjRef = useRef<HTMLInputElement>(null);
  const cpfAutoRef = useRef<HTMLInputElement>(null);
  const cnpjAutoRef = useRef<HTMLInputElement>(null);
  const warningErrorRef = useRef<HTMLDivElement>(null);
  const warningExistRef = useRef<HTMLDivElement>(null);

  const handlerInputBlur = () => {
    const customer = {
      name: nameRef.current?.value,
      phoneNumber: phoneNumberRef.current?.value,
      address: addressRef.current?.value,
      city: cityRef.current?.value,
      state: stateRef.current?.value,
      neighbor: neighborRef.current?.value,
      cep: cepRef.current?.value,
      email: emailRef.current?.value,
      cnpj: cnpjRef.current?.value,
    };

    Props.handlerCustomer(customer);
  };

  const handlerFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cnpj = cnpjAutoRef.current as HTMLInputElement;
    const cpf = cpfAutoRef.current as HTMLInputElement;
    const warning = warningErrorRef.current as HTMLDivElement;
    const warningExist = warningExistRef.current as HTMLDivElement;

    warning.style.display = !cnpj.value && !cpf.value ? "flex" : "none";

    api
      .post("/alorcamentos/customer/findOneAuto", {
        cnpj: cnpj.value,
        cpf: cpf.value,
      })
      .then((res) => {
        warningExist.style.display = "none";
        const customerData = res.data.customer;

        const name = nameRef.current as HTMLInputElement;
        const phoneNumber = phoneNumberRef.current as HTMLInputElement;
        const address = addressRef.current as HTMLInputElement;
        const city = cityRef.current as HTMLInputElement;
        const state = stateRef.current as HTMLSelectElement;
        const neighbor = neighborRef.current as HTMLInputElement;
        const cep = cepRef.current as HTMLInputElement;
        const email = emailRef.current as HTMLInputElement;
        const cnpj = cnpjRef.current as HTMLInputElement;

        name.value = customerData.name;
        phoneNumber.value = customerData.phoneNumber;
        address.value = customerData.address;
        city.value = customerData.city;
        state.value = customerData.state;
        neighbor.value = customerData.neighbor;
        cep.value = customerData.cep;
        email.value = customerData.email;
        cnpj.value = customerData.cnpj;

        handlerInputBlur();
      })
      .catch((error) => {
        if (error.response.data.customerDoesExist) {
          warningExist.style.display = "flex";
        }
      });
  };

  return (
    <Container>
      <Header>
        <h2>INFORMAÇÕES DO CLIENTE</h2>
      </Header>
      <Fields>
        <Field>
          <Label htmlFor="name">Nome</Label>
          <Input
            id="name"
            name="name"
            type="text"
            ref={nameRef}
            onBlur={handlerInputBlur}
          />
        </Field>
        <Field>
          <Label htmlFor="phoneNumber">Telefone</Label>
          <Input
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            ref={phoneNumberRef}
            onBlur={handlerInputBlur}
          />
        </Field>
        <Field>
          <Label htmlFor="address">Endereço</Label>
          <Input
            id="address"
            name="address"
            type="text"
            ref={addressRef}
            onBlur={handlerInputBlur}
          />
        </Field>
        <Field>
          <Label htmlFor="city">Cidade</Label>
          <Input
            id="city"
            name="city"
            type="text"
            ref={cityRef}
            onBlur={handlerInputBlur}
          />
        </Field>
        <Field>
          <Label htmlFor="state">Estado</Label>
          <Select
            id="state"
            name="state"
            ref={stateRef}
            onBlur={handlerInputBlur}
            defaultValue={stateRef.current?.value}
          >
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
          <Label htmlFor="neighbor">Bairro</Label>
          <Input
            id="neighbor"
            name="neighbor"
            type="text"
            ref={neighborRef}
            onBlur={handlerInputBlur}
          />
        </Field>
        <Field>
          <Label htmlFor="cep">CEP</Label>
          <Input
            id="cep"
            name="cep"
            type="text"
            ref={cepRef}
            onBlur={handlerInputBlur}
          />
        </Field>
        <Field>
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            name="email"
            type="text"
            ref={emailRef}
            onBlur={handlerInputBlur}
          />
        </Field>
        <Field>
          <Label htmlFor="cnpj">CNPJ</Label>
          <Input
            id="cnpj"
            name="cnpj"
            type="text"
            ref={cnpjRef}
            onBlur={handlerInputBlur}
          />
        </Field>
        <Field>
          <Label htmlFor="cpf">CPF</Label>
          <Input
            id="cpf"
            name="cpf"
            type="text"
            // ref={cnpjlRef}
            // onBlur={handlerInputBlur}
          />
        </Field>
      </Fields>
      <AutoCode onSubmit={handlerFormSubmit}>
        <AutoInputs>
          <AutoInput>
            <Label htmlFor="cpfAuto">CPF</Label>
            <CodeInput
              id="cpfAuto"
              name="cpfAuto"
              type="text"
              ref={cpfAutoRef}
            />
          </AutoInput>
          <AutoInput>
            <Label htmlFor="cnpjAuto">CNPJ</Label>
            <CodeInput
              id="cnpjAuto"
              name="cnpjAuto"
              type="text"
              ref={cnpjAutoRef}
            />
          </AutoInput>
        </AutoInputs>
        <WarningExist ref={warningExistRef}>
          Não foi encontrado nenhum usuário cadastrado com esse CPF ou CNPJ
        </WarningExist>
        <WarningError ref={warningErrorRef}>
          Prencha um dos dois campos &apos;CPF&apos; ou &apos;CNPJ&apos; para
          fazer o preenchimento automático
        </WarningError>
        <Button type="submit">Preencher</Button>
        <Warning>
          Precha os campos automaticamente usando o CPF ou CNPJ de um cliente já
          cadastrado
        </Warning>
      </AutoCode>
    </Container>
  );
};

export default BudgetAddCustomer;
