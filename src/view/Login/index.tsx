import React, { useRef, useState } from "react";
import api from "../../service/http";
import {
  Container,
  Wrapper,
  Box,
  Header,
  Form,
  Inputs,
  Field,
  Label,
  Input,
  Button,
} from "./styles";

const Login: React.FC = () => {
  const user = useRef("");
  const password = useRef("");

  const [userError, setUserError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handlerFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    user.current !== "" ? setUserError(false) : setUserError(true);
    password.current !== "" ? setPasswordError(false) : setPasswordError(true);

    api
      .post("/alorcamentos/login", { email: user, password })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Wrapper>
        <Box>
          <Header>AloPapers Orcamento</Header>
          <hr />
          <Form onSubmit={handlerFormSubmit}>
            <Inputs>
              <Field>
                <Label htmlFor="user">
                  Usuario ou E-mail
                  {userError && <span>usuario ou e-mail incorreto</span>}
                </Label>
                <Input
                  id="user"
                  name="user"
                  type="text"
                  placeholder="Usuario ou E-mail"
                  onChange={(e) => (user.current = e.target.value)}
                />
              </Field>
              <Field>
                <Label htmlFor="password">
                  Senha
                  {passwordError && <span>senha incorreta</span>}
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Senha"
                  onChange={(e) => (password.current = e.target.value)}
                />
              </Field>
            </Inputs>
            <Button type="submit">ENTRAR</Button>
          </Form>
        </Box>
        <span>© Copyright 2021. Alorcamento</span>
      </Wrapper>
    </Container>
  );
};

export default Login;
