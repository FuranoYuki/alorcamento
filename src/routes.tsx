import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { isAuthenticated } from "./service/token";

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PrivateRoute = ({ component: Component, ...rest }: any) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

const Routes = (): JSX.Element => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} />

      <PrivateRoute exact path="/" component={Budget} />
      <PrivateRoute exact path="/budget" component={Budget} />
      <PrivateRoute exact path="/budget/create" component={BudgetCreate} />

      <PrivateRoute exact path="/customer" component={Customer} />
      <PrivateRoute exact path="/customer/create" component={CustomerCreate} />
      <PrivateRoute
        exact
        path="/customer/update/:id"
        component={CustomerUpdate}
      />

      <PrivateRoute exact path="/product" component={Product} />
      <PrivateRoute exact path="/product/create" component={ProductCreate} />

      <PrivateRoute path="/budget/pdf/:type/:id" component={PDFView} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
