import React, { useState, useRef, useEffect } from "react";

import BudgetAddProductField from "../BudgetAddProductField";
import {
  Container,
  Content,
  Header,
  Table,
  THead,
  TBody,
  TableTh,
  AddProducts,
  Fields,
  Field,
  Label,
  Input,
  Button,
} from "./styles";

interface Product {
  id: string;
  name: string;
  image: string;
  qtd: string;
  value: string;
}

interface Props {
  handlerProcuts: (prod: Product[]) => void;
}

const BudgetAddProduct: React.FC<Props> = (Props) => {
  const id = useRef("0");
  const qtdRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const valueRef = useRef<HTMLInputElement>(null);
  // const totalRef = useRef<HTMLInputElement>(null);
  const [products, setProducts] = useState<Product[]>([]);

  const handlerRemoveField = (e: React.MouseEvent) => {
    const remove = e.currentTarget.parentNode as HTMLDivElement;
    const field = remove.parentNode as HTMLTableRowElement;
    const updatedProducts = products.filter(
      (product) => product.id != field.id
    );

    setProducts([...updatedProducts]);
  };

  const handlerButtonClick = () => {
    const qtd = qtdRef.current as HTMLInputElement;
    const name = nameRef.current as HTMLInputElement;
    const image = imageRef.current as HTMLInputElement;
    const price = valueRef.current as HTMLInputElement;

    if (qtd.value && name.value && image.value && price.value) {
      id.current = String(Number(id.current) + 1);

      const newProduct: Product = {
        qtd: qtd.value,
        name: name.value,
        image: URL.createObjectURL(image.files?.item(0)),
        value: price.value,
        id: id.current,
      };

      setProducts([...products, newProduct]);

      qtd.value = "";
      name.value = "";
      image.value = "";
      price.value = "";
    } else {
      console.log("please set all boxies");
    }
  };

  useEffect(() => {
    Props.handlerProcuts(products);
  }, [products]);

  return (
    <Container>
      <Content>
        <Header>Produtos</Header>
        <Table>
          <div>
            <THead>
              <TableTh>Image</TableTh>
              <TableTh>Nome</TableTh>
              <TableTh>QTD</TableTh>
              <TableTh>Preço Unit</TableTh>
              <TableTh>Total</TableTh>
            </THead>
            <TBody>
              {products.map((product: Product) => (
                <BudgetAddProductField
                  id={product.id}
                  key={product.id}
                  qtd={product.qtd}
                  name={product.name}
                  image={product.image}
                  value={product.value}
                  handlerRemoveField={handlerRemoveField}
                />
              ))}
            </TBody>
          </div>
        </Table>
        <AddProducts>
          <Fields>
            <Field>
              <Label htmlFor="image">Imagem</Label>
              <Input type="file" id="image" name="image" ref={imageRef} />
            </Field>
            <Field>
              <Label htmlFor="name">Nome</Label>
              <Input type="text" id="name" name="name" ref={nameRef} />
            </Field>
            <Field>
              <Label htmlFor="qtd">QTD</Label>
              <Input type="text" id="qtd" name="qtd" ref={qtdRef} />
            </Field>
            <Field>
              <Label htmlFor="value">Preco UNIT.</Label>
              <Input type="text" id="value" name="value" ref={valueRef} />
            </Field>
          </Fields>
          <Button type="button" onClick={handlerButtonClick}>
            Adicionar Produto
          </Button>
        </AddProducts>
      </Content>
    </Container>
  );
};

export default BudgetAddProduct;
