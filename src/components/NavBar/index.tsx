import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faCalculator,
  faPaste,
} from "@fortawesome/free-solid-svg-icons";

import { Container, Header, Image, List, Item } from "./styles";

const NavBar: React.FC = () => {
  const state = useSelector<RootState>((state) => state.navBar);
  const navRef = useRef<HTMLDivElement>(null);
  const budgetRef = useRef<HTMLSpanElement>(null);
  const productRef = useRef<HTMLSpanElement>(null);
  const customerRef = useRef<HTMLSpanElement>(null);

  const field1Ref = useRef<HTMLAnchorElement>(null);
  const field2Ref = useRef<HTMLAnchorElement>(null);
  const field3Ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const nav = navRef.current as HTMLDivElement;
    const budget = budgetRef.current as HTMLSpanElement;
    const customer = customerRef.current as HTMLSpanElement;
    const product = productRef.current as HTMLSpanElement;

    const field1 = field1Ref.current as HTMLAnchorElement;
    const field2 = field2Ref.current as HTMLAnchorElement;
    const field3 = field3Ref.current as HTMLAnchorElement;

    if (state) {
      nav.style.width = 80 + "px";
      budget.style.display = "none";
      product.style.display = "none";
      customer.style.display = "none";

      field1.style.justifyContent = "center";
      field2.style.justifyContent = "center";
      field3.style.justifyContent = "center";
    } else {
      nav.style.width = 200 + "px";
      budget.style.display = "flex";
      product.style.display = "flex";
      customer.style.display = "flex";

      field1.style.justifyContent = "flex-start";
      field2.style.justifyContent = "flex-start";
      field3.style.justifyContent = "flex-start";
    }
  }, [state]);

  return (
    <Container ref={navRef}>
      <Header>
        <Link to="/budget">
          <Image
            src="/Logo Rosa Fundo Transparente-03.png"
            alt="alopapers brand"
          />
        </Link>
      </Header>
      <List>
        <Item>
          <Link to="/customer" ref={field1Ref}>
            <FontAwesomeIcon icon={faAddressCard} />
            <span ref={customerRef}>Clientes</span>
          </Link>
        </Item>
        <Item>
          <Link to="/budget" ref={field2Ref}>
            <FontAwesomeIcon icon={faCalculator} />
            <span ref={budgetRef}>Orcamento</span>
          </Link>
        </Item>
        <Item>
          <Link to="/product" ref={field3Ref}>
            <FontAwesomeIcon icon={faPaste} />
            <span ref={productRef}>Produtos</span>
          </Link>
        </Item>
      </List>
    </Container>
  );
};

export default NavBar;
