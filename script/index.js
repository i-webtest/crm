'use strict';

const modal = document.querySelector('.modal');
const modalTitle = modal.querySelector('.modal__title');
const modalCheckbox = modal.querySelector('.modal__checkbox');
const modalInputDiscount = modal.querySelector('.modal__input_discount');
const overlay = document.querySelector('.overlay');
const tableBody = document.querySelector('.table__body');

overlay.classList.remove('active');

const createRow = (goods) => {
  const tr = document.createElement('tr');

  tr.insertAdjacentHTML(
    'afterbegin',
    `
    <td class="table__cell"></td>
    <td class="table__cell table__cell_left table__cell_name" data-id="${
      goods.id
    }">
      <span class="table__cell-id">id: ${goods.id}</span>
      ${goods.title}
    </td>
    <td class="table__cell table__cell_left">${goods.category}</td>
    <td class="table__cell">${goods.units}</td>
    <td class="table__cell">${goods.count}</td>
    <td class="table__cell">$${goods.price}</td>
    <td class="table__cell">$${goods.count * goods.price}</td>
    <td class="table__cell table__cell_btn-wrapper">
      <button class="table__btn table__btn_pic"></button>
      <button class="table__btn table__btn_edit"></button>
      <button class="table__btn table__btn_del"></button>
    </td>
  `
  );

  return tr;
};
