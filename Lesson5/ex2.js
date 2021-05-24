'use strict';

const basket = {
    product: [],

    addToBasket(name, cost, quantity) {
        let result = {
            наименование: name,
            цена: cost,
            количество: quantity
        }
        this.product.push(result)
    },

    countBasketPrice() {
        return this.product.reduce((cost, goods) => cost + goods.цена * goods.количество, 0);
    },

    quantityOfGoods() {
        return this.product.reduce((quantity, goods) => quantity + goods.количество, 0);
    },

    showBasket() {
        const basketElement = document.getElementById('basket');
        this.product.length > 0 ?
            basketElement.innerHTML = ('В корзине: ' + this.quantityOfGoods() + ' товаров на сумму ' + this.countBasketPrice() + ' рублей') :
            basketElement.innerHTML = 'Корзина пуста';

    }

};

basket.addToBasket('яблоки', 100, 3);
basket.addToBasket('груши', 200, 1);

basket.showBasket();

