import Product from "./Product.js";
import ProductCard from "./ProductCard.js";
import ProductList from "./ProductList.js";
import Cart from "./Cart.js";

const divProducts = document.querySelector("#products");

const prod1 = new Product("Cafe 1", 1.1, "cafe.jpg");
const prod2 = new Product("Cafe 2", 2.2, "cafe.jpg");
const prod1Card = new ProductCard(prod1);
const prod2Card = new ProductCard(prod2);
const cart = new Cart();

prod1Card.linkToCart(cart);
prod2Card.linkToCart(cart);

divProducts.appendChild(prod1Card.render());
divProducts.appendChild(prod2Card.render());
