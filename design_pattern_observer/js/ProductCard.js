export default class ProductCard {
	product;
	qtity;
	cart;
	article;
	h2Name;
	pPrice;
	pQtity;
	img;
	buttonAdd;

	constructor(product) {
		this.product = product;
		this.qtity = 0;
		this.buildArticle();
	}

	linkToCart(cart) {
		this.cart = cart;
	}

	addToCart() {
		this.qtity++;
		this.cart.addProduct(this);
		this.pQtity.textContent = this.qtity;
	}
	buildArticle() {
		this.article = document.createElement("article");
		this.buildH2Name();
		this.buildPPrice();
		this.buildPQtity();
		this.buildImg();
		this.buildButton();
		this.article.appendChild(this.h2Name);
		this.article.appendChild(this.pPrice);
		this.article.appendChild(this.pQtity);
		this.article.appendChild(this.img);
		this.article.appendChild(this.buttonAdd);
	}
	buildH2Name() {
		this.h2Name = document.createElement("h2");
		this.h2Name.textContent = this.product.name;
	}
	buildPPrice() {
		this.pPrice = document.createElement("p");
		this.pPrice.textContent = this.product.price + " €";
	}
	buildPQtity() {
		this.pQtity = document.createElement("p");
		this.pQtity.textContent = this.qtity;
	}
	buildImg() {
		this.img = document.createElement("img");
		this.img.src = "images/" + this.product.imgSrc;
	}
	buildButton() {
		this.buttonAdd = document.createElement("button");
		this.buttonAdd.textContent = "Ajouter";
		this.handleButtonClick();
	}
	handleButtonClick() {
		this.buttonAdd.addEventListener("click", () => {
			this.addToCart();
		});
	}

	render() {
		return this.article;
	}
}
