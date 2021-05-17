"use strict";

console.log('Задание 2')


const basket = {
    goodsList: [],

    addToBasket(name, cost, quantity) {
        let result = {
            наименование: name,
            цена: cost,
            количество: quantity
        }
        this.goodsList.push(result)
    },

    countBasketPrice() {
        return this.goodsList.reduce((cost, goods) => cost + goods.цена * goods.количество, 0);
    }

};

basket.addToBasket('яблоки', 100, 3);
basket.addToBasket('груши', 200, 1);

console.log('Стоимость товаров в корзине: ' + basket.countBasketPrice());


