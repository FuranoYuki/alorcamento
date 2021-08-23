import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import api from "../../service/http";
import { errorStyle } from "../../components/Notifications";
import { login, isAuthenticated } from "../../service/token";
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
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const history = useHistory();

  const [userError, setUserError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handlerFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const email = emailRef.current as HTMLInputElement;
    const password = passwordRef.current as HTMLInputElement;

    email.value !== "" ? setUserError(false) : setUserError(true);
    password.value !== "" ? setPasswordError(false) : setPasswordError(true);

    api
      .post("/alorcamentos/user/login", {
        email: email.value,
        password: password.value,
      })
      .then((res) => {
        login(res.data.token);
        history.push("/budget");
      })
      .catch(() => {
        toast.error("Credenciais incorretas", errorStyle);
      });
  };

  useEffect(() => {
    if (isAuthenticated()) {
      history.push("/budget");
    }
  }, []);

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
                  {userError && (
                    <span className="warning">preencha o e-mail</span>
                  )}
                  <span>E-mail</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="E-mail"
                  ref={emailRef}
                />
              </Field>
              <Field>
                <Label htmlFor="password">
                  {passwordError && (
                    <span className="warning">insira uma senha</span>
                  )}
                  <span>Senha</span>
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Senha"
                  ref={passwordRef}
                />
              </Field>
            </Inputs>
            <Button type="submit">ENTRAR</Button>
          </Form>
        </Box>
        <span>© Copyright 2021. Alorcamento</span>
      </Wrapper>
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

export default Login;
