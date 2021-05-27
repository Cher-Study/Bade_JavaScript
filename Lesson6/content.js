'use strict';
const cartItem = {
    goods: [
        {
            id_product: 123,
            product_name: 'Ноутбук',
            price: 45600,
        },
        {
            id_product: 456,
            product_name: 'Мышка',
            price: 1000,
        },
        {
            id_product: 305,
            product_name: 'Клавиатура',
            price: 2000,
        },
    ],

    render(good) {
        return `<div class="good">
                    <div><h2>${good.product_name}</h2> </div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <br>
                    <input type="button" data-class = "${good.id_product}" class="btn" value="Купить"></input>
                </div>`;
    },

    printGoods() {
        if (this.goods.length) {
            this.goods.forEach(good => {
                this.cartListBlock.insertAdjacentHTML('beforeend', this.render(good));
            });
        }
    },

    init() {
        this.cartListBlock = document.querySelector('.catalog');
        this.printGoods();
    }
}

const cart = {
    cartListBlock: null,
    cartButton: null,
    listOfGoods: null,
    cartItem,
    goodsInBasket: [

    ],

    init() {
        this.cartListBlock = document.querySelector('.basketInfo');
        this.cartButton = document.querySelector('.cart-btn');
        this.listOfGoods = document.querySelector('.listOfGoods');
        Object.assign(cartItem.cartListBlock)
            .addEventListener('click', (event) => { this.buttonClickHandler(event) });
        this.cartButton.addEventListener('click', this.clearCart.bind(this));

        this.printInfo();
    },
    printInfo() {
        this.cartListBlock.textContent = '';
        if (this.goodsInBasket.length) {
            this.cartListBlock.insertAdjacentHTML('beforeend', `В корзине ${this.goodsInBasket.length} позиций(и) на сумму ${this.calculateOfBasket()}`);
        } else {
            this.cartListBlock.textContent = 'Корзина пуста';
        }
    },

    clearCart() {
        this.listOfGoods.innerHTML = '';
        this.goodsInBasket = [];
        this.printInfo();
    },

    buttonClickHandler(event) {
        if (event.target.tagName !== 'INPUT') return;
        this.addToBasket(event.target.dataset.class);
    },

    addToBasket(good_id) {
        for (let elem of cartItem.goods) {
            if (good_id == elem.id_product) {
                let elemCopy = elem;
                let index = this.goodsInBasket.indexOf(elemCopy);
                if (index == -1) {
                    elemCopy.quantity = 1;
                    this.goodsInBasket.push(elemCopy);
                } else {
                    this.goodsInBasket[index].quantity += 1;
                }
            }
            this.printInfo();
            this.printBasket();

        }
    },

    calculateOfBasket() {
        return this.goodsInBasket.reduce((cost, goods) => cost + goods.price * goods.quantity, 0);
    },



    printBasket() {
        this.listOfGoods.textContent = 'Товары в корзине:';
        if (this.goodsInBasket.length) {
            this.goodsInBasket.forEach(good => {
                this.listOfGoods.insertAdjacentHTML('beforeend', this.renderBasket(good));
            });
        }
    },

    renderBasket(good) {
        return `<div class="goodBasket">
                    <div><b>${good.product_name}</b> </div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <div><b>Количество</b>: ${good.quantity}</div>
                </div>`;
    },

};

cartItem.init();
cart.init();

