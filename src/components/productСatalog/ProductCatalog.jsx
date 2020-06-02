import React, { Component } from "react";
import { connect } from "react-redux";
import PizzaItem from "./pizzaItem/PizzaItem";
import "./ProductCatalog.css";
import { getProductsThunkCreater } from "../../store/thunk/productsThunk";
import { addInBasket } from "../../store/actions/basketActions";
import { Redirect } from "react-router";

class Catalog extends Component {
  componentDidMount() {
    this.props.getProductsApi();
  }
  render() {
    if (!this.props.isAuth) {
      return <Redirect to={"/login"} />;
    }
    return (
      <div className="productPizza">
        {this.props.pizzas.map(pizza => (
          <PizzaItem
            key={pizza.id}
            pizza={pizza}
            addInBasket={this.props.addInBasket}
          />
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    pizzas: state.productsReducer.pizzas,
    isAuth: !!state.userReducer.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getProductsApi: () => dispatch(getProductsThunkCreater()),
    addInBasket: products => dispatch(addInBasket(products))
  };
};

const CatalogContainer = connect(mapStateToProps, mapDispatchToProps)(Catalog);

export default CatalogContainer;
