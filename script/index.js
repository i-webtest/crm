'use strict';

const goods = [
  {
    id: 1,
    title: 'Смартфон Xiaomi 11T 8/128GB',
    price: 27000,
    description:
      'Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.',
    category: 'mobile-phone',
    discont: false,
    count: 3,
    units: 'шт',
    images: {
      small: 'img/smrtxiaomi11t-m.jpg',
      big: 'img/smrtxiaomi11t-b.jpg',
    },
  },
  {
    id: 2,
    title: 'Радиоуправляемый автомобиль Cheetan',
    price: 4000,
    description:
      'Внедорожник на дистанционном управлении. Скорость 25км/ч. Возраст 7 - 14 лет',
    category: 'toys',
    discont: 5,
    count: 1,
    units: 'шт',
    images: {
      small: 'img/cheetancar-m.jpg',
      big: 'img/cheetancar-b.jpg',
    },
  },
  {
    id: 3,
    title: 'ТВ приставка MECOOL KI',
    price: 12400,
    description:
      'Всего лишь один шаг сделает ваш телевизор умным, Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, сочетает в себе прочный процессор Cortex-A53 с чипом Amlogic S905D',
    category: 'tv-box',
    discont: 15,
    count: 4,
    units: 'шт',
    images: {
      small: 'img/tvboxmecool-m.jpg',
      big: 'img/tvboxmecool-b.jpg',
    },
  },
  {
    id: 4,
    title: 'Витая пара PROConnect 01-0043-3-25',
    price: 22,
    description:
      'Витая пара Proconnect 01-0043-3-25 является сетевым кабелем с 4 парами проводов типа UTP, в качестве проводника в которых используется алюминий, плакированный медью CCA. Такая неэкранированная витая пара с одножильными проводами диаметром 0.50 мм широко применяется в процессе сетевых монтажных работ. С ее помощью вы сможете обеспечить развертывание локальной сети в домашних условиях или на предприятии, объединить все необходимое вам оборудование в единую сеть.',
    category: 'cables',
    discont: false,
    count: 420,
    units: 'v',
    images: {
      small: 'img/lan_proconnect43-3-25.jpg',
      big: 'img/lan_proconnect43-3-25-b.jpg',
    },
  },
];

const modal = document.querySelector('.modal');
const modalTitle = modal.querySelector('.modal__title');
const modalCheckbox = modal.querySelector('.modal__checkbox');
const modalInputDiscount = modal.querySelector('.modal__input_discount');
const overlay = document.querySelector('.overlay');
const tableBody = document.querySelector('.table__body');
const btnAddGoods = document.querySelector('.panel__add-goods');
const btnDelGoods = document.querySelectorAll('.table__btn_del');
const modalClose = modal.querySelector('.modal__close');
const form = modal.querySelector('.modal__form');
const codeId = modal.querySelector('.vendor-code__id');
const modalTotalPrice = modal.querySelector('.modal__total-price');
let tableCellId = document.querySelector('.table__cell-id');
const cmsTotalPrice = document.querySelector('.cms__total-price');
let tableCellName = form.querySelector('.table__cell_name');

overlay.classList.remove('active');

const modalControl = () => {
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

const totalPrice = (goods) => {
  let price = 0;
  goods.map((item) => (price += item.price * item.count));

  return price;
};

const totalCost = (modalTotalPrice) => {
  const price = form.price;
  const count = form.count;

  price.addEventListener('focusout', () => {
    modalTotalPrice.textContent = '$' + price.value * count.value;
  });

  count.addEventListener('focusout', () => {
    modalTotalPrice.textContent = '$' + price.value * count.value;
  });
};

const createRow = ({ id, title, price, category, count, units }) => {
  const tr = document.createElement('tr');

  tr.insertAdjacentHTML(
    'afterbegin',
    `
    <td class="table__cell"></td>
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
      <button class="table__btn table__btn_pic"></button>
      <button class="table__btn table__btn_edit"></button>
      <button class="table__btn table__btn_del"></button>
    </td>
  `
  );

  return tr;
};

const deleteGoods = () => {
  tableBody.addEventListener('click', (e) => {
    const target = e.target;

    if (target.closest('.table__btn_del')) {
      const row = target.closest('tr');

      const currentId = +row.querySelector('td').textContent;

      goods.splice(
        goods.findIndex((title) => title.id === currentId),

        1
      );
      cmsTotalPrice.textContent = '$ ' + totalPrice(goods);

      row.remove();
    }
    console.log('goods: ', goods);
  });
};

const checkboxForm = () => {
  form.discount.addEventListener('change', () => {
    if (form.discount.checked) {
      form.discount_count.removeAttribute('disabled');
    } else {
      form.discount_count.setAttribute('disabled', true);
      form.discount_count.value = '';
    }
  });
};

///////////////////////////////////
const addGoodsData = (title, goods) => {
  goods.push(title);
  console.log('goods: ', goods);

  cmsTotalPrice.textContent = '$ ' + totalPrice(goods);
};

/////////////////////////////////
const addGoodsPage = (title) => {
  tableBody.append(createRow(title));
};
////////////////////////////////////

const formControl = (tableBody, goods, title) => {
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
    addGoodsData(newGoods, goods, title);

    form.reset();
    closeModal();
  });
};

const renderGoods = (arr) => {
  let ordinalNumber = tableBody.querySelectorAll('tr').length + 1;

  for (const elem of arr) {
    const itemGoods = createRow(elem);

    itemGoods.querySelector('td').textContent = ordinalNumber;
    ordinalNumber += 1;
    tableBody.append(itemGoods);
  }
};

modalControl();
totalCost(modalTotalPrice);
cmsTotalPrice.textContent = '$ ' + totalPrice(goods);
deleteGoods();
checkboxForm();
const { closeModal } = modalControl(btnAddGoods, overlay);
formControl(tableBody, goods);
renderGoods(goods);
