import React from "react";
import "./Reset.css";
import "./App.css";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import Catalog from "./components/productСatalog/ProductCatalog";
import LogIn from "./components/logIn/LogIn";
import RegistrationForm from "./components/registration/Registration";
import List from "./components/shoppingBasket/ShoppingBasket";
import Home from "./newProject/components/home/Home";
import Order from "./newProject/components/order/Order";
import CatalogOfGoods from "./newProject/components/catalog/Catalog";
import PageLayout from "./newProject/components/layout/Layout";
import { isAuth } from "./utils/auth/auth";

function App() {
  return (
    <div className="app">
      <div className="appContent">
        <PageLayout>
          <BrowserRouter>
            <Route exact path="/" component={Home} />
            <PrivateRoute path="/catalog">
              <Catalog />
            </PrivateRoute>
            <Route path="/login" component={LogIn} />
            <Route path="/registration" component={RegistrationForm} />
            <PrivateRoute path="/basket">
              <List />
            </PrivateRoute>
            <Route path="/home" component={Home} />
            <Route path="/catalogofgoods" component={CatalogOfGoods} />
            <Route path="/order" component={Order} />
          </BrowserRouter>
        </PageLayout>
      </div>
    </div>
  );
}

export function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default App;
