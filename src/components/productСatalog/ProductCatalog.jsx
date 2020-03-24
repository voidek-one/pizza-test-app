import React, { Component } from "react";
import PizzaItem from "./pizzaItem/PizzaItem";
import "./ProductCatalog.css";
import { Link } from "react-router-dom";

export default class Catalog extends Component {
  state = { pizzas: [] };
  async getPizzas() {
    const url = "//localhost:5050/api/pizzas";
    const response = await fetch(url);

    if (response.ok) {
      const json = await response.json();
      if (!Array.isArray(json)) {
        throw Error(`ожидался массив ${JSON.stringify(json)}`);
      }
      return json;
    }
  }
  async componentDidMount() {
    const pizzas = await this.getPizzas();
    if (pizzas) {
      this.setState({ pizzas });
    }
  }
  render() {
    const pizzas = this.state.pizzas;
    return (
      <div>
        <div>
          <Link href="http://localhost:3000/basket">
            <img
              className="iconBasket"
              src="https://st.depositphotos.com/1005920/1832/i/450/depositphotos_18323389-stock-photo-shopping-cart-green-glossy-icon.jpg"
            />
          </Link>
        </div>
        <div className="productPizza">
          {pizzas.map(pizza => (
            <PizzaItem key={pizza.id} pizza={pizza} />
          ))}
        </div>
      </div>
    );
  }
}
