'use strict';

// Первая задача
const nameProduct = prompt('Наименование товара?');
const amount = +prompt('Количество товара?');
const category = prompt('Категория товара?');
const price = +prompt('Цена товара?');
const totalAmount = amount * price;

console.log(`На складе ${amount} единицы товара "${nameProduct}" на сумму ${totalAmount}$`);