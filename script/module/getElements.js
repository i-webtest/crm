export const getElements = () => {
  const modal = document.querySelector('.modal');
  const modalTitle = document.querySelector('.modal__title');
  const modalCheckbox = document.querySelector('.modal__checkbox');
  const modalInputDiscount = document.querySelector('.modal__input_discount');
  const overlay = document.querySelector('.overlay');
  const tableBody = document.querySelector('.table__body');
  const btnAddGoods = document.querySelector('.panel__add-goods');
  const btnDelGoods = document.querySelectorAll('.table__btn_del');
  const modalClose = document.querySelector('.modal__close');
  const form = document.querySelector('.modal__form');
  const codeId = document.querySelector('.vendor-code__id');
  const modalTotalPrice = document.querySelector('.modal__total-price');
  let tableCellId = document.querySelector('.table__cell-id');
  const cmsTotalPrice = document.querySelector('.cms__total-price');
  let tableCellName = document.querySelector('.table__cell_name');

  return {
    modal,
    modalTitle,
    modalCheckbox,
    modalInputDiscount,
    overlay,
    tableBody,
    btnAddGoods,
    btnDelGoods,
    modalClose,
    form,
    codeId,
    modalTotalPrice,
    tableCellId,
    cmsTotalPrice,
    tableCellName,
  };
};
