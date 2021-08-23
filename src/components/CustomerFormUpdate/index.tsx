import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import api from "../../service/http";
import ICustomer from "../../interfaces/ICustomer";
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

interface Props {
  customer: ICustomer;
}

const CustomerFormUpdate: React.FC<Props> = (Props) => {
  const history = useHistory();

  const [cep, setcep] = useState<string | undefined>("");
  const [cpf, setcpf] = useState<string | undefined>("");
  const [cnpj, setcnpj] = useState<string | undefined>("");
  const [name, setname] = useState<string | undefined>("");
  const [city, setcity] = useState<string | undefined>("");
  const [email, setemail] = useState<string | undefined>("");
  const [state, setstate] = useState<string | undefined>("");
  const [address, setaddress] = useState<string | undefined>("");
  const [neighbor, setneighbor] = useState<string | undefined>("");
  const [phoneNumber, setphoneNumber] = useState<string | undefined>("");

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
        toast.success("Cadastro do cliente atualizado", successStyle);
        setTimeout(() => {
          history.push("/customer");
        }, 2500);
      })
      .catch(() => {
        toast.error("Falha ao atualizar cadastro do cliente", errorStyle);
      });
  };

  const handlerChangeInput = (e: React.ChangeEvent) => {
    const input = e.target as HTMLInputElement;

    switch (input.id) {
      case "state":
        setstate(input.value.trim());
        break;
      case "city":
        setcity(input.value.trim());
        break;
      case "neighbor":
        setneighbor(input.value.trim());
        break;
      case "address":
        setaddress(input.value.trim());
        break;
      case "cep":
        setcep(input.value.trim());
        break;
      case "cpf":
        setcpf(input.value.trim());
        break;
      case "cnpj":
        setcnpj(input.value.trim());
        break;
      case "phoneNumber":
        setphoneNumber(input.value.trim());
        break;
      default:
        break;
    }
  };

  const handlerBackClick = () => {
    history.goBack();
  };

  useEffect(() => {
    setcep(Props.customer.cep);
    setcpf(Props.customer.cpf);
    setname(Props.customer.name);
    setcity(Props.customer.city);
    setcnpj(Props.customer.cnpj);
    setemail(Props.customer.email);
    setstate(Props.customer.state);
    setaddress(Props.customer.address);
    setneighbor(Props.customer.neighbor);
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
              onChange={handlerChangeInput}
              defaultValue={Props.customer.state}
            >
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
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
};

export default CustomerFormUpdate;
