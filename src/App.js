import React from "react";
import "./Reset.css";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import LogInContainer from "./components/logIn/LogInContainer";
import ShoppingBasket from "./components/shoppingBasket/ShoppingBasket";
import Home from "./components/home/Home";
import PageLayout from "./components/layout/Layout";

import RegistrationContainer from "./components/registration/RegistrationContainer";
import CatalogContainer from "./components/productСatalog/ProductCatalog";

const App = () => {
  return (
    <div className="app">
      <div className="appContent">
        <BrowserRouter>
          <PageLayout>
            <Route exact path="/" component={Home} />
            <Route path="/catalog" component={CatalogContainer} />
            <Route path="/basket" component={ShoppingBasket} />
            <Route path="/login" component={LogInContainer} />
            <Route path="/registration" component={RegistrationContainer} />
          </PageLayout>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
