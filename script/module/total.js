export const totalPrice = (goods) => {
  let price = 0;
  goods.map((item) => (price += item.price * item.count));

  return price;
};

export const totalCost = (form, modalTotalPrice) => {
  const price = form.price;
  const count = form.count;
  price.addEventListener('focusout', () => {
    modalTotalPrice.textContent = '$' + price.value * count.value;
  });

  count.addEventListener('focusout', () => {
    modalTotalPrice.textContent = '$' + price.value * count.value;
  });
};

export const calculateTotalPrice = (tableBody) => {
  let total = 0;

  [...tableBody.children].forEach((item, index) => {
    item.children[0].textContent = index + 1;
    total += Number(item.children[6].innerHTML.slice(1));
  });

  const cmsTotalPrice = document.querySelector('.cms__total-price');
  cmsTotalPrice.innerText = `$ ${parseFloat(total)}`;
};
