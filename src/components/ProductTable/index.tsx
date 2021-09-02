import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

import api from "../../service/http";
import ProductTableCell from "../ProductTableCell";
import { successStyle, errorStyle } from "../Notifications";
import { Container, Table, THeader, TBody, Field } from "./styles";

interface Product {
  _id: string;
  name: string;
  value: string;
  finish: string;
}

const ProductTable: React.FC = () => {
  const [products, setproducts] = useState<Product[]>();

  const handlerRemoveClick = (id: string) => {
    api
      .delete("/alorcamentos/product/delete", {
        data: {
          id: id,
        },
      })
      .then((res) => {
        if (res.data.productDeleted) {
          getProducts();
          toast.success("Produto excluido com sucesso", successStyle);
        }
      })
      .catch(() => {
        toast.error(
          "Houve um erro ao tentar excluir o produto, tente novamente mais tarde",
          errorStyle
        );
      });
  };

  const getProducts = () => {
    api
      .get("/alorcamentos/product/findAll")
      .then((res) => {
        setproducts(res.data.products);
      })
      .catch(() => {
        toast.error(
          "Houve um erro ao carregar os produtos cadastrados, tente novamente mais tarde",
          errorStyle
        );
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <Table>
        <THeader>
          <Field>
            <FontAwesomeIcon icon={faChevronUp} />
            <span>Nome</span>
          </Field>
          <Field>
            <FontAwesomeIcon icon={faChevronUp} />
            <span>Acabamento</span>
          </Field>
          <Field>
            <FontAwesomeIcon icon={faChevronUp} />
            <span>valor</span>
          </Field>
          <Field>
            <span>Editar</span>
          </Field>
          <Field>
            <span>Excluir</span>
          </Field>
        </THeader>
        <TBody>
          {products &&
            products.map((product) => (
              <ProductTableCell
                key={product._id}
                product={product}
                handlerRemoveClick={handlerRemoveClick}
              />
            ))}
        </TBody>
      </Table>
    </Container>
  );
};

export default ProductTable;
