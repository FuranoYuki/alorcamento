import React, { useState, useRef, useEffect, memo } from "react";
import { toast } from "react-toastify";

import IProduct from "../../interfaces/IProduct";
import { errorStyle } from "../Notifications";
import BudgetSelectProduct from "../BudgetSelectProduct";
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
  Buttons,
  Button,
  ButtonSearch,
} from "./styles";

interface Product {
  _id?: string;
  name: string;
  value: string;
  finish: string;
}

interface Props {
  handlerProcuts: (prod: IProduct[]) => void;
}

const BudgetAddProduct: React.FC<Props> = (Props) => {
  const id = useRef("0");
  const qtdRef = useRef<HTMLInputElement>(null);
  const areaRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const widthRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const valueRef = useRef<HTMLInputElement>(null);
  const totalRef = useRef<HTMLInputElement>(null);
  const finishRef = useRef<HTMLInputElement>(null);
  const heightRef = useRef<HTMLInputElement>(null);

  const [products, setProducts] = useState<IProduct[]>([]);
  const [modal, setmodal] = useState(false);

  const handlerRemoveField = (e: React.MouseEvent) => {
    const remove = e.currentTarget.parentNode as HTMLDivElement;
    const field = remove.parentNode as HTMLTableRowElement;
    const updatedProducts = products.filter(
      (product) => product._id != field.id
    );

    setProducts([...updatedProducts]);
  };

  const objectRef = () => {
    const qtd = qtdRef.current as HTMLInputElement;
    const area = areaRef.current as HTMLInputElement;
    const name = nameRef.current as HTMLInputElement;
    const image = imageRef.current as HTMLInputElement;
    const value = valueRef.current as HTMLInputElement;
    const width = widthRef.current as HTMLInputElement;
    const total = totalRef.current as HTMLInputElement;
    const finish = finishRef.current as HTMLInputElement;
    const height = heightRef.current as HTMLInputElement;

    return {
      qtd,
      area,
      name,
      image,
      value,
      width,
      total,
      finish,
      height,
    };
  };

  const objectValues = (): IProduct | false => {
    const { qtd, name, image, value, width, finish, height, area, total } =
      objectRef();

    if (
      qtd.value &&
      area.value &&
      name.value &&
      image.value &&
      value.value &&
      width.value &&
      total.value &&
      finish.value &&
      height.value
    ) {
      id.current = String(Number(id.current) + 1);

      return {
        qtd: qtd.value.trim(),
        _id: id.current.trim(),
        name: name.value.trim(),
        finish: finish.value.trim(),
        value: value.value.trim().replace(",", "."),
        width: width.value.trim().replace(",", "."),
        height: height.value.trim().replace(",", "."),
        image: URL.createObjectURL(image.files?.item(0)),
        area: area.value.trim().replace(",", "."),
        total: total.value.trim().replace(",", "."),
      };
    } else {
      return false;
    }
  };

  const objectChange = () => {
    const { qtd, name, image, value, width, finish, height, area, total } =
      objectRef();

    qtd.value = "";
    area.value = "";
    name.value = "";
    image.value = "";
    value.value = "";
    width.value = "";
    total.value = "";
    finish.value = "";
    height.value = "";
  };

  const handlerButtonClick = () => {
    if (objectValues()) {
      const {
        qtd,
        _id,
        area,
        name,
        image,
        value,
        total,
        width,
        height,
        finish,
      } = objectValues() as IProduct;

      const newProduct: IProduct = {
        qtd,
        _id,
        area,
        name,
        image,
        value,
        total,
        width,
        height,
        finish,
      };

      setProducts([...products, newProduct]);

      objectChange();
      toast.success("Produto adicionado ao atual orçamento");
    } else {
      toast.error("Preencha todos os campos do produto", errorStyle);
    }
  };

  const inputChangeHandler = (e: React.ChangeEvent) => {
    const obj = e.currentTarget as HTMLInputElement;
    obj.value = obj.value.trim().replace(/[^\d.,]/g, "");

    const { area, qtd, value, width, height } = objectRef();

    if (area.value && qtd.value && value.value) {
      totalCount();
    }

    if (height.value && width.value) {
      width.value = width.value.replace(",", ".").trim();

      height.value = height.value.replace(",", ".").trim();

      area.value = String(
        (Number(width.value) * Number(height.value)).toFixed(1)
      );
    }
  };

  const totalCount = () => {
    const { total, area, qtd, value } = objectRef();
    total.value = String(
      (Number(area.value) * Number(qtd.value) * Number(value.value)).toFixed(2)
    );
  };

  const handlerSearchClick = () => {
    setmodal(!modal);
  };

  const handlerSelected = (data: Product) => {
    const { name, finish, value } = objectRef();
    name.value = data.name;
    value.value = data.value;
    finish.value = data.finish;

    handlerSearchClick();
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
              <TableTh>Descricao</TableTh>
              <TableTh>Medidas</TableTh>
              <TableTh>m²</TableTh>
              <TableTh>QTD</TableTh>
              <TableTh>Preço Unit.</TableTh>
              <TableTh>Total</TableTh>
            </THead>
            <TBody>
              {products.map((product: IProduct) => (
                <BudgetAddProductField
                  key={product._id}
                  product={product}
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
              <Label htmlFor="finish">Acabamento</Label>
              <Input type="text" id="finish" name="finish" ref={finishRef} />
            </Field>
            <Field>
              <Label htmlFor="width">Largura (m)</Label>
              <Input
                type="text"
                id="width"
                name="width"
                ref={widthRef}
                onChange={inputChangeHandler}
              />
            </Field>
            <Field>
              <Label htmlFor="height">Altura (m)</Label>
              <Input
                type="text"
                id="height"
                name="height"
                ref={heightRef}
                onChange={inputChangeHandler}
              />
            </Field>
            <Field>
              <Label htmlFor="area">m2</Label>
              <Input type="text" id="area" name="area" ref={areaRef} />
            </Field>
            <Field>
              <Label htmlFor="qtd">QTD</Label>
              <Input
                type="text"
                id="qtd"
                name="qtd"
                ref={qtdRef}
                onChange={inputChangeHandler}
              />
            </Field>
            <Field>
              <Label htmlFor="value">Preco UNIT.</Label>
              <Input
                type="text"
                id="value"
                name="value"
                ref={valueRef}
                onChange={inputChangeHandler}
              />
            </Field>
            <Field>
              <Label htmlFor="total">Total</Label>
              <Input
                type="text"
                id="total"
                name="total"
                ref={totalRef}
                onChange={inputChangeHandler}
              />
            </Field>
          </Fields>
          <Buttons>
            <ButtonSearch type="button" onClick={handlerSearchClick}>
              Selecionar produto
            </ButtonSearch>
            <Button type="button" onClick={handlerButtonClick}>
              Adicionar Produto
            </Button>
          </Buttons>
        </AddProducts>
      </Content>
      {modal && (
        <BudgetSelectProduct
          handlerSelected={handlerSelected}
          handlerSearchClick={handlerSearchClick}
        />
      )}
    </Container>
  );
};

export default memo(BudgetAddProduct);
