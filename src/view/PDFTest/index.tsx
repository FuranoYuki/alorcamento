import React, { useEffect, useState } from "react";
import { PDFViewer } from "@react-pdf/renderer";
import { Page, Text, View, Document, Image } from "@react-pdf/renderer";

import { Container, styles } from "./styles";

interface Product {
  id: string;
  name: string;
  image: string;
  qtd: string;
  value: string;
}

interface Customer {
  name?: string;
  phoneNumber?: string;
  address?: string;
  city?: string;
  state?: string;
  neighbor?: string;
  cep?: string;
  email?: string;
  cnpj?: string;
}

interface Props {
  customer: Customer;
  products: Product[];
}

const PDFTest: React.FC<Props> = (Props) => {
  const [total, settotal] = useState(0);

  useEffect(() => {
    const value = Props.products.reduce(
      (a, b) => a + Number(b.value) * Number(b.qtd),
      0
    );
    settotal(value);
  }, [Props.products]);

  return (
    <Container>
      <PDFViewer>
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
                      <Text>
                        E-mail: alopapers@gmail.com / alopapers.com.br
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.HeaderRight}>
                  <Text>Data de Criacao</Text>
                  <Text>10/08/2021</Text>
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
                    <Text style={styles.label}>Vendedor:</Text>
                    <Text style={styles.input}>Alopapers</Text>
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
                    <Text style={styles.label}>E-mail:</Text>
                    <Text style={styles.input}>{Props.customer.email}</Text>
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
              <View style={styles.productsInfo} wrap={true}>
                <View style={styles.productInfoHeader}>
                  <View style={styles.imageHeader}>
                    <Text>Imagem</Text>
                  </View>
                  <View style={styles.nameHeader}>
                    <Text>Nome</Text>
                  </View>
                  <View style={styles.qtdHeader}>
                    <Text>QTD</Text>
                  </View>
                  <View style={styles.valueHeader}>
                    <Text>PRECO UNIT.</Text>
                  </View>
                  <View style={styles.totalHeader}>
                    <Text>TOTAL</Text>
                  </View>
                </View>
                {Props.products.map((product) => (
                  <View
                    style={styles.productInfoRow}
                    key={product.id}
                    wrap={false}
                  >
                    <View style={styles.imageRow}>
                      <Image src={product.image} />
                    </View>
                    <View style={styles.nameRow}>
                      <Text>{product.name}</Text>
                    </View>
                    <View style={styles.qtdRow}>
                      <Text>{product.qtd}</Text>
                    </View>
                    <View style={styles.valueRow}>
                      <Text>{product.value}</Text>
                    </View>
                    <View style={styles.totalRow}>
                      <Text>{Number(product.qtd) * Number(product.value)}</Text>
                    </View>
                  </View>
                ))}
                <View style={styles.budgetTotalInfo}>
                  <View style={styles.totalInfoTitle}>
                    <Text>Total</Text>
                  </View>
                  <View style={styles.totalInfoValue}>
                    <Text> R${total} </Text>
                  </View>
                </View>
              </View>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </Container>
  );
};

export default PDFTest;
