import React, { useEffect, useState, memo } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import api from "../../service/http";
import axios from "axios";
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

  const handlerCEPBlur = (e: React.FocusEvent) => {
    const obj = e.currentTarget as HTMLInputElement;
    axios
      .get(`https://viacep.com.br/ws/${obj.value.trim()}/json/`)
      .then((res) => {
        setaddress(res.data.logradouro);
        setcity(res.data.localidade);
        setstate(res.data.uf);
        setneighbor(res.data.bairro);

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
              <Label htmlFor="cep">CEP</Label>
              <span>Error</span>
            </Header>
            <Input
              id="cep"
              name="cep"
              value={cep}
              onBlur={handlerCEPBlur}
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
              value={Props.customer.state}
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
          <Field>
            <Header>
              <Label htmlFor="cpf">CPF</Label>
              <span>CPF já cadastrado</span>
            </Header>
            <Input disabled id="cpf" name="cpf" value={cpf} />
          </Field>
          <Field>
            <Header>
              <Label htmlFor="cnpj">CNPJ</Label>
              <span>CNPJ já cadastrado</span>
            </Header>
            <Input disabled id="cnpj" name="cnpj" value={cnpj} />
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

export default memo(CustomerFormUpdate);
