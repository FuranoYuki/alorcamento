import React, { useEffect, useState, memo } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import api from "../../service/http";
import BudgetSelectProductField from "../BudgetSelectProductField";
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

interface Product {
  _id?: string;
  name: string;
  value: string;
  finish: string;
}

interface Props {
  handlerSelected: (data: Product) => void;
  handlerSearchClick: () => void;
}

const BudgetSelectProduct: React.FC<Props> = (Props) => {
  const [name, setname] = useState("");
  const [products, setproducts] = useState<Product[]>();
  const [productSelect, setproductSelect] = useState<Product>();

  const handlerCloseModal = () => {
    Props.handlerSearchClick();
  };

  const handlerClickOut = (e: React.MouseEvent) => {
    if (e.currentTarget == e.target) {
      handlerCloseModal();
    }
  };

  const handlerSelectedProduct = (product: Product) => {
    setproductSelect(product);
  };

  const handlerChangeInput = (e: React.ChangeEvent) => {
    const obj = e.currentTarget as HTMLInputElement;
    setname(obj.value);
  };

  const handlerSelectClick = () => {
    if (productSelect !== undefined) Props.handlerSelected(productSelect);
    handlerCloseModal();
  };

  const getProducts = () => {
    api
      .get("/alorcamentos/product/findAll")
      .then((res) => {
        setproducts(res.data.products);
      })
      .catch(() => {
        console.log("error");
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container onClick={handlerClickOut}>
      <Modal>
        <Header>
          <FontAwesomeIcon icon={faTimes} onClick={handlerCloseModal} />
        </Header>
        <Search>
          <InputFilter
            type="text"
            placeholder="pequise um nome"
            onChange={handlerChangeInput}
          />
        </Search>
        <Content>
          <ContentHeader>
            <ContentHeaderField>Nome</ContentHeaderField>
            <ContentHeaderField>Acabamento</ContentHeaderField>
            <ContentHeaderField>Valor Unit.</ContentHeaderField>
          </ContentHeader>
          {products &&
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
              ))}
        </Content>
        <Button onClick={handlerSelectClick}>Selecionar Produto</Button>
      </Modal>
    </Container>
  );
};

export default memo(BudgetSelectProduct);
