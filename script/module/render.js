import { createRow } from './create.js';

export const renderGoods = (arr, tableBody) => {
  let ordinalNumber = tableBody.querySelectorAll('tr').length + 1;

  for (const elem of arr) {
    const itemGoods = createRow(elem);

    itemGoods.querySelector('td').textContent = ordinalNumber;
    ordinalNumber += 1;
    tableBody.append(itemGoods);
  }
};
