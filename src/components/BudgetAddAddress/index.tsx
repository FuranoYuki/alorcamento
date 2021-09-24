import React, { useRef, memo } from "react";
import axios from "axios";
import { toast } from "react-toastify";

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
  const nosendRef = useRef<HTMLSelectElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const neighborRef = useRef<HTMLInputElement>(null);
  const localtakeRef = useRef<HTMLSelectElement>(null);
  const complementRef = useRef<HTMLInputElement>(null);

  const objectRef = () => {
    const cep = cepRef.current as HTMLInputElement;
    const city = cityRef.current as HTMLInputElement;
    const state = stateRef.current as HTMLSelectElement;
    const nosend = nosendRef.current as HTMLSelectElement;
    const address = addressRef.current as HTMLInputElement;
    const neighbor = neighborRef.current as HTMLInputElement;
    const localtake = localtakeRef.current as HTMLSelectElement;
    const complement = complementRef.current as HTMLInputElement;

    return {
      cep,
      city,
      state,
      nosend,
      address,
      neighbor,
      localtake,
      complement,
    };
  };

  const handlerInputsBlur = async (e: React.FocusEvent) => {
    const obj = e.currentTarget as HTMLInputElement | HTMLSelectElement;
    const {
      cep,
      city,
      state,
      nosend,
      address,
      neighbor,
      localtake,
      complement,
    } = objectRef();

    if (obj.id === "sendingCEP") {
      await axios
        .get(`https://viacep.com.br/ws/${obj.value.trim()}/json/`)
        .then((res) => {
          state.value = res.data.uf;
          city.value = res.data.localidade;
          neighbor.value = res.data.bairro;
          address.value = res.data.logradouro;

          const option = document.getElementById(
            `${res.data.uf}_Sending`
          ) as HTMLOptionElement;

          option.selected = true;

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
      nosend: nosend.value,
      address: address.value,
      neighbor: neighbor.value,
      localtake: localtake.value,
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
              <option value="AC" id="AC_Sending">
                AC
              </option>
              <option value="AL" id="AL_Sending">
                AL
              </option>
              <option value="AP" id="AP_Sending">
                AP
              </option>
              <option value="AM" id="AM_Sending">
                AM
              </option>
              <option value="BA" id="BA_Sending">
                BA
              </option>
              <option value="CE" id="CE_Sending">
                CE
              </option>
              <option value="DF" id="DF_Sending">
                DF
              </option>
              <option value="ES" id="ES_Sending">
                ES
              </option>
              <option value="GO" id="GO_Sending">
                GO
              </option>
              <option value="MA" id="MA_Sending">
                MA
              </option>
              <option value="MT" id="MT_Sending">
                MT
              </option>
              <option value="MS" id="MS_Sending">
                MS
              </option>
              <option value="MG" id="MG_Sending">
                MG
              </option>
              <option value="PA" id="PA_Sending">
                PA
              </option>
              <option value="PB" id="PB_Sending">
                PB
              </option>
              <option value="PR" id="PR_Sending">
                PR
              </option>
              <option value="PE" id="PE_Sending">
                PE
              </option>
              <option value="PI" id="PI_Sending">
                PI
              </option>
              <option value="RJ" id="RJ_Sending">
                RJ
              </option>
              <option value="RN" id="RN_Sending">
                RN
              </option>
              <option value="RS" id="RS_Sending">
                RS
              </option>
              <option value="RO" id="RO_Sending">
                RO
              </option>
              <option value="RR" id="RR_Sending">
                RR
              </option>
              <option value="SC" id="SC_Sending">
                SC
              </option>
              <option value="SP" id="SP_Sending">
                SP
              </option>
              <option value="SE" id="SE_Sending">
                SE
              </option>
              <option value="TO" id="TO_Sending">
                TO
              </option>
            </Select>
          </Field>
          <Field>
            <Label htmlFor="localtake">Retira no Local</Label>
            <Select
              id="localtake"
              name="localtake"
              ref={localtakeRef}
              onBlur={handlerInputsBlur}
            >
              <option value="Nao" id="takeNo">
                Nao
              </option>
              <option value="Sim" id="takeYes">
                Sim
              </option>
            </Select>
          </Field>
          <Field>
            <Label htmlFor="nosend">Sem entrega</Label>
            <Select
              id="nosend"
              name="nosend"
              ref={nosendRef}
              onBlur={handlerInputsBlur}
            >
              <option value="Nao" id="nosendNo">
                Nao
              </option>
              <option value="Sim" id="nosendYes">
                Sim
              </option>
            </Select>
          </Field>
        </Fields>
      </Wrapper>
    </Container>
  );
};

export default memo(BudgetAddAddress);
