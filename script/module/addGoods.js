import { createRow } from './create.js';
import { totalPrice } from './total.js';

const addGoodsPage = (title, tableBody) => {
  tableBody.append(createRow(title));
};

const addGoodsData = (title, goods) => {
  goods.push(title);
  console.log('goods: ', goods);

  const cmsTotalPrice = document.querySelector('.cms__total-price');
  cmsTotalPrice.textContent = '$ ' + totalPrice(goods);
};

export default { addGoodsPage, addGoodsData };
