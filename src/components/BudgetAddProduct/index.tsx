import React, { useState, useRef, useEffect } from "react";

import IProduct from "../../interfaces/IProduct";
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

interface Props {
  handlerProcuts: (prod: IProduct[]) => void;
}

const BudgetAddProduct: React.FC<Props> = (Props) => {
  const id = useRef("0");
  const qtdRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const valueRef = useRef<HTMLInputElement>(null);
  const areaRef = useRef<HTMLInputElement>(null);
  // const totalRef = useRef<HTMLInputElement>(null);
  const [products, setProducts] = useState<IProduct[]>([]);

  const handlerRemoveField = (e: React.MouseEvent) => {
    const remove = e.currentTarget.parentNode as HTMLDivElement;
    const field = remove.parentNode as HTMLTableRowElement;
    const updatedProducts = products.filter(
      (product) => product._id != field.id
    );

    setProducts([...updatedProducts]);
  };

  const handlerButtonClick = () => {
    const qtd = qtdRef.current as HTMLInputElement;
    const name = nameRef.current as HTMLInputElement;
    const image = imageRef.current as HTMLInputElement;
    const price = valueRef.current as HTMLInputElement;
    const area = areaRef.current as HTMLInputElement;

    if (qtd.value && name.value && image.value && price.value && area.value) {
      id.current = String(Number(id.current) + 1);

      const newProduct: IProduct = {
        qtd: qtd.value.trim(),
        name: name.value.trim(),
        image: URL.createObjectURL(image.files?.item(0)),
        value: price.value.replace(",", ".").trim(),
        _id: id.current.trim(),
        area: area.value.trim(),
        total: String(
          (Number(qtd.value.trim()) * Number(price.value.trim())).toFixed(2)
        ),
      };

      setProducts([...products, newProduct]);

      qtd.value = "";
      name.value = "";
      image.value = "";
      price.value = "";
      area.value = "";
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
              <TableTh>Area (m²)</TableTh>
              <TableTh>QTD</TableTh>
              <TableTh>Preço Unit.</TableTh>
              <TableTh>Total</TableTh>
            </THead>
            <TBody>
              {products.map((product: IProduct) => (
                <BudgetAddProductField
                  id={product._id}
                  key={product._id}
                  qtd={product.qtd}
                  name={product.name}
                  area={product.area}
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
              <Label htmlFor="area">Area (m²)</Label>
              <Input type="text" id="area" name="area" ref={areaRef} />
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
