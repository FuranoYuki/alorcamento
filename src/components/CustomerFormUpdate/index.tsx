import React, { useEffect, useState } from "react";
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

interface Customer {
  _id: string;
  name: string;
  phoneNumber: string;
  address: string;
  city: string;
  state: string;
  neighbor: string;
  cep: string;
  email: string;
  cnpj: string;
  cpf: string;
}

interface Props {
  customer: Customer;
}

const CustomerFormUpdate: React.FC<Props> = (Props) => {
  const history = useHistory();

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [state, setstate] = useState("");
  const [city, setcity] = useState("");
  const [neighbor, setneighbor] = useState("");
  const [address, setaddress] = useState("");
  const [cep, setcep] = useState("");
  const [cpf, setcpf] = useState("");
  const [cnpj, setcnpj] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");

  const handlerFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    api
      .put("/alorcamentos/customer/update", {
        id: Props.customer._id,
        name,
        email,
        state,
        city,
        neighbor,
        address,
        cep,
        cpf,
        cnpj,
        phoneNumber,
      })
      .then(() => {
        history.push("/customer");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlerChangeInput = (e: React.ChangeEvent) => {
    const input = e.target as HTMLInputElement;

    switch (input.id) {
      case "state":
        setstate(input.value);
        break;
      case "city":
        setcity(input.value);
        break;
      case "neighbor":
        setneighbor(input.value);
        break;
      case "address":
        setaddress(input.value);
        break;
      case "cep":
        setcep(input.value);
        break;
      case "cpf":
        setcpf(input.value);
        break;
      case "cnpj":
        setcnpj(input.value);
        break;
      case "phoneNumber":
        setphoneNumber(input.value);
        break;
      default:
        break;
    }
  };

  const handlerBackClick = () => {
    history.goBack();
  };

  useEffect(() => {
    setname(Props.customer.name);
    setemail(Props.customer.email);
    setstate(Props.customer.state);
    setcity(Props.customer.city);
    setneighbor(Props.customer.neighbor);
    setaddress(Props.customer.address);
    setcep(Props.customer.cep);
    setcpf(Props.customer.cpf);
    setcnpj(Props.customer.cnpj);
    setphoneNumber(Props.customer.phoneNumber);
  }, [Props.customer]);

  return (
    <Container>
      <Form onSubmit={handlerFormSubmit}>
        <Inputs>
          <Field>
            <Header>
              <Label htmlFor="name">Name</Label>
              <span>campo obrigatório</span>
            </Header>
            <Input disabled id="name" name="name" value={name} />
          </Field>
          <Field>
            <Header>
              <Label htmlFor="email">E-mail</Label>
              <span>campo obrigatório</span>
            </Header>
            <Input disabled id="email" name="email" value={email} />
          </Field>
          <Field>
            <Header>
              <Label htmlFor="cpf">CPF</Label>
              <span>CPF já cadastrado</span>
            </Header>
            <Input disabled id="cpf" name="cpf" value={cpf} />
          </Field>
          <Field>
            <Header>
              <Label htmlFor="cep">CEP</Label>
              <span>Error</span>
            </Header>
            <Input
              id="cep"
              name="cep"
              value={cep}
              onChange={handlerChangeInput}
            />
          </Field>
          <Field>
            <Header>
              <Label htmlFor="city">Cidade</Label>
              <span>Error</span>
            </Header>
            <Input
              id="city"
              name="city"
              value={city}
              onChange={handlerChangeInput}
            />
          </Field>
          <Field>
            <Header>
              <Label htmlFor="state">Estado</Label>
              <span>Error</span>
            </Header>
            <Select
              id="state"
              name="state"
              value={state}
              onChange={handlerChangeInput}
            >
              <option value=""></option>
              <option
                value="Acre"
                selected={Props.customer.state === "Acre" ? true : false}
              >
                Acre
              </option>
              <option
                value="Alagoas"
                selected={Props.customer.state === "Alagoas" ? true : false}
              >
                Alagoas
              </option>
              <option
                value="Amapá"
                selected={Props.customer.state === "Amapá" ? true : false}
              >
                Amapá
              </option>
              <option
                value="Amazonas"
                selected={Props.customer.state === "Amazonas" ? true : false}
              >
                Amazonas
              </option>
              <option
                value="Bahia"
                selected={Props.customer.state === "Bahia" ? true : false}
              >
                Bahia
              </option>
              <option
                value="Ceará"
                selected={Props.customer.state === "Ceará" ? true : false}
              >
                Ceará
              </option>
              <option
                value="Distrito Federal"
                selected={Props.customer.state === "Distrito" ? true : false}
              >
                Distrito Federal
              </option>
              <option
                value="Espírito Santo"
                selected={
                  Props.customer.state === "Espírito Santo" ? true : false
                }
              >
                Espírito Santo
              </option>
              <option
                value="Goiás"
                selected={Props.customer.state === "Goiás" ? true : false}
              >
                Goiás
              </option>
              <option
                value="Maranhão"
                selected={Props.customer.state === "Maranhão" ? true : false}
              >
                Maranhão
              </option>
              <option
                value="Mato Grosso"
                selected={Props.customer.state === "Mato Grosso" ? true : false}
              >
                Mato Grosso
              </option>
              <option
                value="Mato Grosso do Sul"
                selected={
                  Props.customer.state === "Mato Grosso do Sul" ? true : false
                }
              >
                Mato Grosso do Sul
              </option>
              <option
                value="Minas Gerais"
                selected={
                  Props.customer.state === "Minas Gerais" ? true : false
                }
              >
                Minas Gerais
              </option>
              <option
                value="Pará"
                selected={Props.customer.state === "Pará" ? true : false}
              >
                Pará
              </option>
              <option
                value="Paraíba"
                selected={Props.customer.state === "Paraíba" ? true : false}
              >
                Paraíba
              </option>
              <option
                value="Paraná"
                selected={Props.customer.state === "Paraná" ? true : false}
              >
                Paraná
              </option>
              <option
                value="Pernambuco"
                selected={Props.customer.state === "Pernambuco" ? true : false}
              >
                Pernambuco
              </option>
              <option
                value="Piauí"
                selected={Props.customer.state === "Piauí" ? true : false}
              >
                Piauí
              </option>
              <option
                value="Rio de Janeiro"
                selected={
                  Props.customer.state === "Rio de Janeiro" ? true : false
                }
              >
                Rio de Janeiro
              </option>
              <option
                value="Rio Grande do Norte"
                selected={
                  Props.customer.state === "Rio Grande do Norte" ? true : false
                }
              >
                Rio Grande do Norte
              </option>
              <option
                value="Rio Grande do Sul"
                selected={
                  Props.customer.state === "Rio Grande do Sul" ? true : false
                }
              >
                Rio Grande do Sul
              </option>
              <option
                value="Rondônia"
                selected={Props.customer.state === "Rondônia" ? true : false}
              >
                Rondônia
              </option>
              <option
                value="Roraima"
                selected={Props.customer.state === "Roraima" ? true : false}
              >
                Roraima
              </option>
              <option
                value="Santa Catarina"
                selected={
                  Props.customer.state === "Santa Catarina" ? true : false
                }
              >
                Santa Catarina
              </option>
              <option
                value="São Paulo"
                selected={Props.customer.state === "São Paulo" ? true : false}
              >
                São Paulo
              </option>
              <option
                value="Sergipe"
                selected={Props.customer.state === "Sergipe" ? true : false}
              >
                Sergipe
              </option>
              <option
                value="Tocantins"
                selected={Props.customer.state === "Tocantins" ? true : false}
              >
                Tocantins
              </option>
            </Select>
          </Field>
          <Field>
            <Header>
              <Label htmlFor="neighbor">Bairro</Label>
              <span>Error</span>
            </Header>
            <Input
              id="neighbor"
              name="neighbor"
              value={neighbor}
              onChange={handlerChangeInput}
            />
          </Field>
          <Field>
            <Header>
              <Label htmlFor="address">Endereço</Label>
              <span>Error</span>
            </Header>
            <Input
              id="address"
              name="address"
              value={address}
              onChange={handlerChangeInput}
            />
          </Field>
          <Field>
            <Header>
              <Label htmlFor="cnpj">CNPJ</Label>
              <span>CNPJ já cadastrado</span>
            </Header>
            <Input disabled id="cnpj" name="cnpj" value={cnpj} />
          </Field>
          <Field>
            <Header>
              <Label htmlFor="phoneNumber">Telefone</Label>
              <span>Error</span>
            </Header>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handlerChangeInput}
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

export default CustomerFormUpdate;
