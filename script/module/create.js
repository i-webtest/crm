export const createRow = ({ id, title, price, category, count, units }) => {
  const tableBody = document.querySelector('.table__body');
  const num = tableBody.childElementCount + 1;
  const tr = document.createElement('tr');

  tr.insertAdjacentHTML(
    'afterbegin',
    `
    <td class="table__cell">${num}</td>
    <td class="table__cell table__cell_left table__cell_name" data-id="${id}">
      <span class="table__cell-id">id: ${id}</span>
      ${title}
    </td>
    <td class="table__cell table__cell_left">${category}</td>
    <td class="table__cell">${units}</td>
    <td class="table__cell">${count}</td>
    <td class="table__cell">$${price}</td>
    <td class="table__cell">$${count * price}</td>
    <td class="table__cell table__cell_btn-wrapper">
      <button class="table__btn table__btn_pic" data-pic="img/cheetan.jpg"></button>
      <button class="table__btn table__btn_edit"></button>
      <button class="table__btn table__btn_del"></button>
    </td>
  `
  );

  return tr;
};
