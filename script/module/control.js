import add from './addGoods.js';
import { calculateTotalPrice } from './total.js';

const { addGoodsPage, addGoodsData } = add;

const modalControl = (btnAddGoods, overlay, codeId, modalTotalPrice) => {
  const openModal = () => {
    overlay.classList.add('active');
    let id = Math.round(Math.random() * 10000000000000);
    codeId.textContent = id;
    modalTotalPrice.textContent = '$ ' + 0;
  };

  btnAddGoods.addEventListener('click', openModal);

  const closeModal = () => {
    overlay.classList.remove('active');
  };

  overlay.addEventListener('click', (e) => {
    const target = e.target;

    if (target === overlay || target.closest('.modal__close')) {
      closeModal();
    }
  });

  return {
    closeModal,
  };
};

const formControl = (
  form,
  tableBody,
  closeModal,
  codeId,
  cmsTotalPrice,
  goods
) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newGoods = Object.fromEntries(formData);
    console.log('newGoods: ', newGoods);
    newGoods.id = codeId.textContent;
    newGoods.title = form.name.value;
    newGoods.price = +newGoods.price;
    newGoods.count = +newGoods.count;

    addGoodsPage(newGoods, tableBody);
    addGoodsData(newGoods, goods, codeId, cmsTotalPrice);

    form.reset();
    closeModal();
  });
};

const deleteGoods = (tableBody, goods, cmsTotalPrice) => {
  tableBody.addEventListener('click', (e) => {
    const target = e.target;

    if (target.closest('.table__btn_del')) {
      target.closest('tr').remove();

      const row = target.closest('tr');
      const currentId = +row.querySelector('td').textContent;

      goods.splice(
        goods.findIndex((title) => title.id === currentId),

        1
      );

      calculateTotalPrice(tableBody, cmsTotalPrice);
    }
    console.log('goods: ', goods);
  });
};

export default { modalControl, formControl, deleteGoods };
