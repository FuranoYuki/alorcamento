import React, { useRef, memo } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import api from "../../service/http";
import "react-toastify/dist/ReactToastify.css";
import ICustomer from "../../interfaces/ICustomer";
import { successStyle, errorStyle } from "../Notifications";
import { formatCPF, formatCNPJ, formatPhone } from "../FormatInput";
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
import { login, logout } from "../../service/token";
import refreshToken from "../../functions/refreshToken";

interface Props {
  handlerCustomer: (cust: ICustomer) => void;
}

const BudgetAddCustomer: React.FC<Props> = (Props) => {
  const history = useHistory();

  const cpfRef = useRef<HTMLInputElement>(null);
  const cepRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const cnpjRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const stateRef = useRef<HTMLSelectElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const neighborRef = useRef<HTMLInputElement>(null);
  const phoneNumberRef = useRef<HTMLInputElement>(null);

  const cpfAutoRef = useRef<HTMLInputElement>(null);
  const cnpjAutoRef = useRef<HTMLInputElement>(null);

  const warningErrorRef = useRef<HTMLDivElement>(null);
  const warningExistRef = useRef<HTMLDivElement>(null);

  const handlerInputBlur = async (e: React.FocusEvent | null = null) => {
    if (e) {
      const obj = e.currentTarget as HTMLInputElement | HTMLSelectElement;
      if (obj.id === "cep") {
        await cepAuto(obj);
      }
    }

    const customer = {
      cep: cepRef.current?.value.trim(),
      cpf: cpfRef.current?.value.trim(),
      name: nameRef.current?.value.trim(),
      city: cityRef.current?.value.trim(),
      cnpj: cnpjRef.current?.value.trim(),
      state: stateRef.current?.value.trim(),
      email: emailRef.current?.value.trim(),
      address: addressRef.current?.value.trim(),
      neighbor: neighborRef.current?.value.trim(),
      phoneNumber: phoneNumberRef.current?.value.trim(),
    };

    Props.handlerCustomer(customer);
  };

  const cepAuto = async (obj: HTMLInputElement | HTMLSelectElement) => {
    await axios
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

        const option = document.getElementById(
          `${res.data.uf}`
        ) as HTMLOptionElement;

        option.selected = true;

        toast.success("CEP encontrado", successStyle);
      })
      .catch(() => {
        toast.error("CEP nao encontrado", errorStyle);
      });
  };

  const handlerInputChange = (e: React.ChangeEvent) => {
    const obj = e.currentTarget as HTMLInputElement;
    if (obj.id === "cpf") {
      obj.value = formatCPF(obj.value);
    }

    if (obj.id === "cnpj") {
      obj.value = formatCNPJ(obj.value);
    }

    if (obj.id === "phoneNumber") {
      obj.value = formatPhone(obj.value);
    }
  };

  const handlerAutoChange = (e: React.ChangeEvent) => {
    const obj = e.currentTarget as HTMLInputElement;
    if (obj.id === "cpfAuto") {
      obj.value = formatCPF(obj.value);
    }

    if (obj.id === "cnpjAuto") {
      obj.value = formatCNPJ(obj.value);
    }
  };

  const handlerFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cpf = cpfAutoRef.current as HTMLInputElement;
    const cnpj = cnpjAutoRef.current as HTMLInputElement;
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

        const cpf = cpfRef.current as HTMLInputElement;
        const cep = cepRef.current as HTMLInputElement;
        const name = nameRef.current as HTMLInputElement;
        const city = cityRef.current as HTMLInputElement;
        const cnpj = cnpjRef.current as HTMLInputElement;
        const email = emailRef.current as HTMLInputElement;
        const state = stateRef.current as HTMLSelectElement;
        const address = addressRef.current as HTMLInputElement;
        const neighbor = neighborRef.current as HTMLInputElement;
        const phoneNumber = phoneNumberRef.current as HTMLInputElement;

        cep.value = customerData.cep;
        cpf.value = customerData.cpf;
        cnpj.value = customerData.cnpj;
        name.value = customerData.name;
        city.value = customerData.city;
        email.value = customerData.email;
        state.value = customerData.state;
        address.value = customerData.address;
        neighbor.value = customerData.neighbor;
        phoneNumber.value = customerData.phoneNumber;

        handlerInputBlur();
      })
      .catch(async (error) => {
        if (error.response.data.customerDoesExist) {
          warningExist.style.display = "flex";
        }
        if (error.response.data.tokenExpired) {
          const newToken = await refreshToken();

          if (newToken != "failedRefresh") {
            login(newToken);
            history.push("/budget");
          } else {
            logout();
            history.push("/login");
          }
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
            onChange={handlerInputChange}
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
            <option value="AC" id="AC">
              AC
            </option>
            <option value="AL" id="AL">
              AL
            </option>
            <option value="AP" id="AP">
              AP
            </option>
            <option value="AM" id="AM">
              AM
            </option>
            <option value="BA" id="BA">
              BA
            </option>
            <option value="CE" id="CE">
              CE
            </option>
            <option value="DF" id="DF">
              DF
            </option>
            <option value="ES" id="ES">
              ES
            </option>
            <option value="GO" id="GO">
              GO
            </option>
            <option value="MA" id="MA">
              MA
            </option>
            <option value="MT" id="MT">
              MT
            </option>
            <option value="MS" id="MS">
              MS
            </option>
            <option value="MG" id="MG">
              MG
            </option>
            <option value="PA" id="PA">
              PA
            </option>
            <option value="PB" id="PB">
              PB
            </option>
            <option value="PR" id="PR">
              PR
            </option>
            <option value="PE" id="PE">
              PE
            </option>
            <option value="PI" id="PI">
              PI
            </option>
            <option value="RJ" id="RJ">
              RJ
            </option>
            <option value="RN" id="RN">
              RN
            </option>
            <option value="RD" id="RD">
              RD
            </option>
            <option value="RO" id="RO">
              RO
            </option>
            <option value="RR" id="RR">
              RR
            </option>
            <option value="SC" id="SC">
              SC
            </option>
            <option value="SP" id="SP">
              SP
            </option>
            <option value="SE" id="SE">
              SE
            </option>
            <option value="TO" id="TO">
              TO
            </option>
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
            onChange={handlerInputChange}
          />
        </Field>
        <Field>
          <Label htmlFor="cpf">CPF</Label>
          <Input
            id="cpf"
            name="cpf"
            type="text"
            ref={cpfRef}
            onBlur={handlerInputBlur}
            onChange={handlerInputChange}
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
              onChange={handlerAutoChange}
            />
          </AutoInput>
          <AutoInput>
            <Label htmlFor="cnpjAuto">CNPJ</Label>
            <CodeInput
              id="cnpjAuto"
              name="cnpjAuto"
              type="text"
              ref={cnpjAutoRef}
              onChange={handlerAutoChange}
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

export default memo(BudgetAddCustomer);
