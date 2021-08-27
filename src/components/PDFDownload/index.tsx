import React, { useState, useEffect } from "react";
import {
  Page,
  Text,
  View,
  Document,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";

import IProduct from "../../interfaces/IProduct";
import ICustomer from "../../interfaces/ICustomer";
import ISendingAddress from "../../interfaces/ISendingAddress";

interface Props {
  customer: ICustomer;
  products: IProduct[];
  sendingAddress: ISendingAddress;
  date?: string;
  address?: string;
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#E4E4E4",
  },
  body: {
    display: "flex",
    flexDirection: "column",
  },
  section: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  HeaderLeft: {
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    border: 1,
    borderColor: "black",
    borderStyle: "solid",
  },
  HeaderRight: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    padding: 5,
    fontSize: 9,
    border: 1,
    marginLeft: 5,
    borderColor: "black",
    borderStyle: "solid",
  },
  brandImage: {
    display: "flex",
    flexShrink: 0,

    width: 80,
    height: 80,
    marginLeft: 10,
  },
  storyInfo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    marginLeft: 20,
    fontSize: 10,
    textAlign: "center",
  },
  storyInfoText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",

    marginBottom: 3,
  },
  title: {
    width: 100 + "%",
    fontSize: 20,
    fontWeight: "heavy",
    textAlign: "center",
  },
  customerInfo: {
    display: "flex",
    flexDirection: "column",
    margin: 20,
    borderLeft: 1,
    borderRight: 1,
    borderTop: 1,

    borderColor: "black",
    borderStyle: "solid",
  },
  customerInfoRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 100 + "%",
  },
  infoLongFieldName: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",

    padding: 5,
    paddingRight: 4,
    fontSize: 10,
    borderRight: 1,
    borderBottom: 1,

    borderColor: "black",
    borderStyle: "solid",
  },
  infoLongFieldVendedor: {
    display: "flex",
    flexDirection: "column",

    width: 184,
    padding: 5,
    fontSize: 10,
    borderBottom: 1,

    borderColor: "black",
    borderStyle: "solid",
  },
  infoShortFieldMid: {
    display: "flex",
    flexDirection: "column",

    width: 185,
    padding: 5,
    fontSize: 10,
    borderRight: 1,
    borderBottom: 1,

    borderColor: "black",
    borderStyle: "solid",
  },
  label: {
    marginBottom: 3,
  },
  input: {},
  productsInfo: {
    display: "flex",
    flexDirection: "column",

    margin: 20,
  },
  productInfoHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    padding: 3,
    borderLeft: 1,
    borderRight: 1,
    borderColor: "black",
    borderStyle: "solid",

    backgroundColor: "black",
  },
  imageHeader: {
    textAlign: "center",

    width: 110,
    fontSize: 10,

    color: "white",
  },
  nameHeader: {
    display: "flex",
    alignItems: "center",

    width: 85,
    fontSize: 10,
    paddingLeft: 4,
    paddingRight: 4,

    color: "white",
  },
  medidasHeader: {
    textAlign: "center",

    width: 75,
    fontSize: 10,

    color: "white",
  },
  qtdHeader: {
    textAlign: "center",

    width: 65,
    fontSize: 10,

    color: "white",
  },
  valueHeader: {
    textAlign: "center",

    width: 65,
    fontSize: 10,

    color: "white",
  },
  totalHeader: {
    textAlign: "center",

    width: 75,
    fontSize: 10,

    color: "white",
  },
  productInfoRow: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",

    padding: 3,
    borderLeft: 1,
    borderRight: 1,
    borderBottom: 1,
    borderColor: "black",
    borderStyle: "solid",
  },
  imageRow: {
    textAlign: "center",

    width: 110,
    height: 90,
    maxHeight: 90,
  },
  nameRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",

    width: 85,
    fontSize: 10,
    paddingLeft: 4,
    paddingRight: 4,

    color: "black",
  },
  name: {
    textAlign: "center",
  },
  finish: {
    marginTop: 10,
    textAlign: "center",
  },
  medidasRow: {
    textAlign: "center",

    width: 75,
    fontSize: 10,

    color: "black",
  },
  qtdRow: {
    textAlign: "center",

    width: 65,
    fontSize: 10,

    color: "black",
  },
  valueRow: {
    textAlign: "center",

    width: 65,
    fontSize: 10,

    color: "black",
  },
  totalRow: {
    textAlign: "center",

    width: 75,
    fontSize: 10,

    color: "black",
  },
  budgetTotalInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    width: 180,
    marginLeft: "auto",
    borderLeft: 1,
    borderRight: 1,
    borderBottom: 1,

    borderStyle: "solid",
    borderColor: "black",
  },
  totalInfoValue: {
    textAlign: "center",

    width: 90,
    padding: 5,
    fontSize: 11,

    color: "black",
  },
  totalInfoTitle: {
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
    textAlign: "center",

    padding: 5,
    fontSize: 11,
    borderRight: 1,

    borderStyle: "solid",
    borderColor: "black",
    color: "black",
  },
  sendingAddress: {
    fontSize: 16,
    textAlign: "center",

    color: "black",
  },
  complement: {
    marginLeft: 5,
  },
});

const PDFDownload: React.FC<Props> = (Props) => {
  const [address, setaddress] = useState("");
  const [date, setdate] = useState("");

  useEffect(() => {
    const dateNow = new Date();
    const formatedDate = `${dateNow.getDate()}/${
      dateNow.getMonth() + 1
    }/${dateNow.getFullYear()}`;
    setdate(formatedDate);
  }, []);

  useEffect(() => {
    setaddress(
      `${Props.sendingAddress.address}  ${Props.sendingAddress.complement}`
    );
  }, [Props.sendingAddress]);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.body}>
          <View style={styles.section}>
            <View style={styles.HeaderLeft}>
              <Image
                src="/Logo Rosa Fundo Transparente-03.png"
                style={styles.brandImage}
              />
              <View style={styles.storyInfo}>
                <View style={styles.storyInfoText}>
                  <Text>Tel: /</Text>
                  <Text>Whatsapp: (55) 11-981983900</Text>
                </View>
                <View style={styles.storyInfoText}>
                  <Text>Rua Joaquim Nabuco</Text>
                  <Text>São Paulo (SP) - CEP: 03050-020</Text>
                </View>
                <View style={styles.storyInfoText}>
                  <Text>Facebook: facebook.com/alopapers</Text>
                  <Text>Instagram: instagram.com/alopapers</Text>
                  <Text>E-mail: alopapers@gmail.com / alopapers.com.br</Text>
                </View>
              </View>
            </View>
            <View style={styles.HeaderRight}>
              <Text>Data de Criacao</Text>
              <Text>{Props.date ? Props.date : date}</Text>
            </View>
          </View>
          <View style={styles.title}>
            <Text>Orçamento</Text>
          </View>
          <View style={styles.customerInfo}>
            <View style={styles.customerInfoRow}>
              <View style={styles.infoLongFieldName}>
                <Text style={styles.label}>Cliente:</Text>
                <Text style={styles.input}>{Props.customer.name}</Text>
              </View>
              <View style={styles.infoLongFieldVendedor}>
                <Text style={styles.label}>Email:</Text>
                <Text style={styles.input}>{Props.customer.email}</Text>
              </View>
            </View>
            <View style={styles.customerInfoRow}>
              <View style={styles.infoShortFieldMid}>
                <Text style={styles.label}>Telefone:</Text>
                <Text style={styles.input}></Text>
              </View>
              <View style={styles.infoShortFieldMid}>
                <Text style={styles.label}>CNPJ:</Text>
                <Text style={styles.input}>{Props.customer.cnpj}</Text>
              </View>
              <View style={styles.infoLongFieldVendedor}>
                <Text style={styles.label}>CPF:</Text>
                <Text style={styles.input}>{Props.customer.cpf}</Text>
              </View>
            </View>
            <View style={styles.customerInfoRow}>
              <View style={styles.infoLongFieldName}>
                <Text style={styles.label}>Endereco:</Text>
                <Text style={styles.input}>{Props.customer.address}</Text>
              </View>
              <View style={styles.infoLongFieldVendedor}>
                <Text style={styles.label}>Bairro:</Text>
                <Text style={styles.input}>{Props.customer.neighbor}</Text>
              </View>
            </View>
            <View style={styles.customerInfoRow}>
              <View style={styles.infoShortFieldMid}>
                <Text style={styles.label}>Cidade:</Text>
                <Text style={styles.input}>{Props.customer.city}</Text>
              </View>
              <View style={styles.infoShortFieldMid}>
                <Text style={styles.label}>Estado:</Text>
                <Text style={styles.input}>{Props.customer.state}</Text>
              </View>
              <View style={styles.infoLongFieldVendedor}>
                <Text style={styles.label}>CEP:</Text>
                <Text style={styles.input}>{Props.customer.cep}</Text>
              </View>
            </View>
          </View>
          <View style={styles.sendingAddress}>
            <Text>Endereço de entrega</Text>
          </View>
          <View style={styles.customerInfo}>
            <View style={styles.customerInfoRow}>
              <View style={styles.infoLongFieldName}>
                <Text style={styles.label}>Endereço:</Text>
                <Text style={styles.input}>
                  {Props.address ? Props.address : address}
                </Text>
              </View>
              <View style={styles.infoLongFieldVendedor}>
                <Text style={styles.label}>CEP:</Text>
                <Text style={styles.input}>{Props.sendingAddress.cep}</Text>
              </View>
            </View>
            <View style={styles.customerInfoRow}>
              <View style={styles.infoShortFieldMid}>
                <Text style={styles.label}>Bairro:</Text>
                <Text style={styles.input}>
                  {Props.sendingAddress.neighbor}
                </Text>
              </View>
              <View style={styles.infoShortFieldMid}>
                <Text style={styles.label}>Cidade:</Text>
                <Text style={styles.input}>{Props.sendingAddress.city}</Text>
              </View>
              <View style={styles.infoLongFieldVendedor}>
                <Text style={styles.label}>Estado:</Text>
                <Text style={styles.input}>{Props.sendingAddress.state}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.productsInfo} wrap={true}>
          <View style={styles.productInfoHeader}>
            <View style={styles.imageHeader}>
              <Text>Imagem</Text>
            </View>
            <View style={styles.nameHeader}>
              <Text>Descrição</Text>
            </View>
            <View style={styles.medidasHeader}>
              <Text>Medidas</Text>
            </View>
            <View style={styles.qtdHeader}>
              <Text>Area</Text>
            </View>
            <View style={styles.qtdHeader}>
              <Text>QTD</Text>
            </View>
            <View style={styles.valueHeader}>
              <Text>Preço Unit.</Text>
            </View>
            <View style={styles.totalHeader}>
              <Text>Total</Text>
            </View>
          </View>
          {Props.products.map((product) => (
            <View style={styles.productInfoRow} key={product._id} wrap={false}>
              <View style={styles.imageRow}>
                <Image src={product.image} />
              </View>
              <View style={styles.nameRow}>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.finish}>
                  acabamento de {product.finish}
                </Text>
              </View>
              <View style={styles.medidasRow}>
                <Text>
                  {product.width}m x {product.height}m
                </Text>
              </View>
              <View style={styles.qtdRow}>
                <Text>{product.area}m²</Text>
              </View>
              <View style={styles.qtdRow}>
                <Text>{product.qtd}</Text>
              </View>
              <View style={styles.valueRow}>
                <Text>R${product.value}</Text>
              </View>
              <View style={styles.totalRow}>
                <Text>R${product.total}</Text>
              </View>
            </View>
          ))}
          <View style={styles.budgetTotalInfo}>
            <View style={styles.totalInfoTitle}>
              <Text>Total</Text>
            </View>
            <View style={styles.totalInfoValue}>
              <Text>
                R$
                {Props.products
                  .reduce((a, b) => Number(a) + Number(b.total), 0)
                  .toFixed(2)}
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default PDFDownload;
