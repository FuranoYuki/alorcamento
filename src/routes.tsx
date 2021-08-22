import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// NavBar
import NavBar from "./components/NavBar";

// views

import Login from "./view/Login";

import Customer from "./view/Customer";
import CustomerCreate from "./view/CustomerCreate";
import CustomerUpdate from "./view/CustomerUpdate";

import Product from "./view/Product";
import ProductCreate from "./view/ProductCreate";

import Budget from "./view/Budget";
import BudgetCreate from "./view/BudgetCreate";

import PDFView from "./view/PDFView";

const Routes = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={BudgetCreate} />
      <Route
        exact
        path="/budget"
        render={() => (
          <>
            <NavBar />
            <Budget />
          </>
        )}
      />
      <Route exact path="/product" component={Product} />
      <Route exact path="/product/create" component={ProductCreate} />
      <Route exact path="/customer" component={Customer} />
      <Route exact path="/customer/create" component={CustomerCreate} />
      <Route exact path="/customer/update/:id" component={CustomerUpdate} />
      <Route exact path="/budget/create" component={BudgetCreate} />
      <Route exact path="/budget/pdf/:type/:id" component={PDFView} />
      <Route path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
