import React, { useRef } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

import { successStyle, errorStyle } from "../Notifications";
import ISendingAddress from "../../interfaces/ISendingAddress";
import {
  Container,
  Wrapper,
  Title,
  Fields,
  Field,
  Label,
  Input,
  Select,
} from "./styles";

interface Props {
  handlerSendingAddresss: (send: ISendingAddress) => void;
}

const BudgetAddAddress: React.FC<Props> = (Props) => {
  const cepRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const stateRef = useRef<HTMLSelectElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const neighborRef = useRef<HTMLInputElement>(null);
  const complementRef = useRef<HTMLInputElement>(null);

  const handlerInputsBlur = async (e: React.FocusEvent) => {
    const cep = cepRef.current as HTMLInputElement;
    const city = cityRef.current as HTMLInputElement;
    const state = stateRef.current as HTMLSelectElement;
    const address = addressRef.current as HTMLInputElement;
    const neighbor = neighborRef.current as HTMLInputElement;
    const complement = complementRef.current as HTMLInputElement;

    const obj = e.currentTarget as HTMLInputElement | HTMLSelectElement;

    if (obj.id === "sendingCEP") {
      await axios
        .get(`https://viacep.com.br/ws/${obj.value.trim()}/json/`)
        .then((res) => {
          state.value = res.data.uf;
          city.value = res.data.localidade;
          neighbor.value = res.data.bairro;
          address.value = res.data.logradouro;

          toast.success("CEP de entrega encontrado", successStyle);
        })
        .catch(() => {
          toast.error("CEP de entrega não encontrado", errorStyle);
        });
    }

    const data: ISendingAddress = {
      cep: cep.value,
      city: city.value,
      state: state.value,
      address: address.value,
      neighbor: neighbor.value,
      complement: complement.value,
    };

    Props.handlerSendingAddresss(data);
  };

  return (
    <Container>
      <Wrapper>
        <Title>Endereço de entrega</Title>
        <Fields>
          <Field>
            <Label htmlFor="sendingAddress">Endereço</Label>
            <Input
              type="text"
              ref={addressRef}
              id="sendingAddress"
              name="sendingAddress"
              onBlur={handlerInputsBlur}
            />
          </Field>
          <Field>
            <Label htmlFor="sendingNumber">Complemento</Label>
            <Input
              type="text"
              ref={complementRef}
              id="sendingNumber"
              name="sendingNumber"
              onBlur={handlerInputsBlur}
            />
          </Field>
          <Field>
            <Label htmlFor="sendingCEP">CEP</Label>
            <Input
              ref={cepRef}
              type="text"
              id="sendingCEP"
              name="sendingCEP"
              onBlur={handlerInputsBlur}
            />
          </Field>
          <Field>
            <Label htmlFor="sendingNeighbor">Bairro</Label>
            <Input
              type="text"
              ref={neighborRef}
              id="sendingNeighbor"
              name="sendingNeighbor"
              onBlur={handlerInputsBlur}
            />
          </Field>
          <Field>
            <Label htmlFor="sendingCity">Cidade</Label>
            <Input
              ref={cityRef}
              type="text"
              id="sendingCity"
              name="sendingCity"
              onBlur={handlerInputsBlur}
            />
          </Field>
          <Field>
            <Label htmlFor="sendingState">Estado</Label>
            <Select
              ref={stateRef}
              id="sendingState"
              name="sendingState"
              onBlur={handlerInputsBlur}
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
        </Fields>
      </Wrapper>
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
    </Container>
  );
};

export default BudgetAddAddress;
