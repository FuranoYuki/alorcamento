import styled from "styled-components";
import { StyleSheet } from "@react-pdf/renderer";

export const Container = styled.div`
  width: 100%;
  height: 400px;

  background-color: var(--white-color);

  > iframe {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    border: 3px solid var(--pink-color);
  }
`;

export const styles = StyleSheet.create({
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
    fontSize: 16,
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
    justifyContent: "space-between",

    padding: 5,
    borderLeft: 1,
    borderRight: 1,
    borderColor: "black",
    borderStyle: "solid",

    backgroundColor: "black",
  },
  imageHeader: {
    textAlign: "center",

    width: 130,
    fontSize: 10,

    color: "white",
  },
  nameHeader: {
    display: "flex",
    flexGrow: 1,
    alignItems: "center",

    fontSize: 10,
    paddingLeft: 6,
    paddingRight: 6,

    color: "white",
  },
  qtdHeader: {
    textAlign: "center",

    width: 55,
    fontSize: 10,

    color: "white",
  },
  valueHeader: {
    textAlign: "center",

    width: 75,
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

    padding: 5,
    borderLeft: 1,
    borderRight: 1,
    borderBottom: 1,
    borderColor: "black",
    borderStyle: "solid",
  },
  imageRow: {
    textAlign: "center",

    width: 130,
    maxHeight: 90,
  },
  nameRow: {
    display: "flex",
    alignItems: "center",
    flexGrow: 1,

    fontSize: 11,
    paddingLeft: 6,
    paddingRight: 6,

    color: "black",
  },
  qtdRow: {
    textAlign: "center",

    width: 55,
    fontSize: 11,

    color: "black",
  },
  valueRow: {
    textAlign: "center",

    width: 75,
    fontSize: 11,

    color: "black",
  },
  totalRow: {
    textAlign: "center",

    width: 75,
    fontSize: 11,

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

    width: 75,
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
});
