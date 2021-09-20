import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Container,
  Modal,
  Header,
  Search,
  InputFilter,
  Content,
  ContentHeader,
  ContentHeaderField,
  Button,
} from "./styles";

const BudgetSelectCustomer: React.FC = () => {
  return (
    <Container>
      <Modal>
        <Header>
          <FontAwesomeIcon icon={faTimes} />
        </Header>
        <Search>
          <InputFilter type="text" placeholder="pequise um nome" />
        </Search>
        <Content>
          <ContentHeader>
            <ContentHeaderField>Nome</ContentHeaderField>
            <ContentHeaderField>Acabamento</ContentHeaderField>
            <ContentHeaderField>Valor Unit.</ContentHeaderField>
          </ContentHeader>
          {/* {products &&
            products
              .filter((product) =>
                name !== ""
                  ? product.name.includes(name.toLowerCase().trim())
                  : product
              )
              .map((product) => (
                <BudgetSelectProductField
                  key={product._id}
                  product={product}
                  handlerSelectedProduct={handlerSelectedProduct}
                />
              ))} */}
        </Content>
        <Button>Selecionar Produto</Button>
      </Modal>
    </Container>
  );
};

export default BudgetSelectCustomer;
