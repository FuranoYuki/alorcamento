import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// NavBar
import NavBar from "./components/NavBar";

// views
import Login from "./view/Login";
import Customer from "./view/Customer";
import CustomerCreate from "./view/CustomerCreate";
import CustomerUpdate from "./view/CustomerUpdate";

import Budget from "./view/Budget";
import BudgetCreate from "./view/BudgetCreate";

import PDFTest from "./view/PDFTest";

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
      <Route exact path="/customer" component={Customer} />
      <Route exact path="/customer/create" component={CustomerCreate} />
      <Route exact path="/customer/update/:id" component={CustomerUpdate} />
      <Route exact path="/budget/create" component={BudgetCreate} />
      <Route path="/login" component={Login} />
      <Route path="/pdf" component={PDFTest} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
