export default class Cart {
	productsCards = [];

	constructor() {}

	addProduct(productCard) {
		this.productsCards = this.productsCards.filter(
			(prod) => prod != productCard
		);
		this.productsCards.push(productCard);
		this.render();
	}

	render() {
		const cartSection = document.querySelector("#cart");
		cartSection.innerHTML = "";
		for (let productCard of this.productsCards) {
			const divProduct = document.createElement("div");
			divProduct.innerHTML =
				productCard.product.name + " " + productCard.qtity;
			cartSection.appendChild(divProduct);
		}
	}
}
