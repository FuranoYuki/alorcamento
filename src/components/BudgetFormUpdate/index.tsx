import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import api from "../../service/http";
import { formatCPF, formatCNPJ } from "../FormatInput";
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

interface Params {
  id: string;
}

const BudgetFormUpdate: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<Params>();

  const [qtd, setqtd] = useState("");
  const [cpf, setcpf] = useState("");
  const [name, setname] = useState("");
  const [cnpj, setcnpj] = useState("");
  const [paid, setpaid] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [total, settotal] = useState("");

  const handlerBackClick = () => {
    history.goBack();
  };

  const handlerChangeInput = (e: React.ChangeEvent) => {
    const obj = e.currentTarget as HTMLInputElement | HTMLSelectElement;

    switch (obj.id) {
      case "name":
        setname(obj.value);
        break;
      case "qtd":
        setqtd(obj.value);
        break;
      case "cpf":
        setcpf(formatCPF(obj.value));
        break;
      case "cnpj":
        setcnpj(formatCNPJ(obj.value));
        break;
      case "total":
        settotal(obj.value);
        break;
      case "city":
        setcity(obj.value);
        break;
      case "state":
        setstate(obj.value);
        break;
      case "paid":
        setpaid(obj.value);
        break;
      default:
        break;
    }
  };

  const handlerFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    api
      .post("/alorcamentos/budget/update", {
        id,
        qtd,
        cpf,
        cnpj,
        name,
        paid,
        city,
        state,
        total,
      })
      .then(() => {
        toast.success("Orçamento editado com sucesso", successStyle);
        setTimeout(() => {
          history.push("/budget");
        }, 1500);
      })
      .catch(() => {
        toast.error(
          "Erro ao cadastrar mudanças, tente novamente mais tarde",
          errorStyle
        );
      });
  };

  useEffect(() => {
    api
      .post("/alorcamentos/budget/findOne", { id })
      .then((res) => {
        const budget = res.data.budget;
        setqtd(budget.qtd);
        setcpf(budget.cpf);
        setcnpj(budget.cnpj);
        setname(budget.name);
        setcity(budget.city);
        setpaid(budget.paid);
        settotal(budget.total);
        setstate(budget.state);
      })
      .catch(() => {
        toast.error(
          "Orçamento Não encontrando, tente novamente mais tarde",
          errorStyle
        );
        setTimeout(() => {
          history.push("/budget");
        }, 1500);
      });
  }, []);

  return (
    <Container>
      <Form onSubmit={handlerFormSubmit}>
        <Inputs>
          <Field>
            <Header>
              <Label htmlFor="name">Name</Label>
              <span>campo obrigatório</span>
            </Header>
            <Input
              id="name"
              name="name"
              value={name}
              onChange={handlerChangeInput}
            />
          </Field>
          <Field>
            <Header>
              <Label htmlFor="cpf">CPF</Label>
              <span>campo obrigatório</span>
            </Header>
            <Input
              id="cpf"
              name="cpf"
              value={cpf}
              onChange={handlerChangeInput}
            />
          </Field>
          <Field>
            <Header>
              <Label htmlFor="cnpj">CNPJ</Label>
              <span>campo obrigatório</span>
            </Header>
            <Input
              id="cnpj"
              name="cnpj"
              value={cnpj}
              onChange={handlerChangeInput}
            />
          </Field>
          <Field>
            <Header>
              <Label htmlFor="city">Cidade</Label>
              <span>campo obrigatório</span>
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
              <Label htmlFor="qtd">QTD</Label>
              <span>campo obrigatório</span>
            </Header>
            <Input
              id="qtd"
              name="qtd"
              value={qtd}
              onChange={handlerChangeInput}
            />
          </Field>
          <Field>
            <Header>
              <Label htmlFor="total">Total</Label>
              <span>campo obrigatório</span>
            </Header>
            <Input
              id="total"
              name="total"
              value={total}
              onChange={handlerChangeInput}
            />
          </Field>
          <Field>
            <Header>
              <Label htmlFor="paid">Pago</Label>
              <span>campo obrigatório</span>
            </Header>
            <Select
              id="paid"
              name="paid"
              value={paid}
              onChange={handlerChangeInput}
            >
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </Select>
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

export default BudgetFormUpdate;
