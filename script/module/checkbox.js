export const checkboxForm = (form) => {
  form.discount.addEventListener('change', () => {
    if (form.discount.checked) {
      form.discount_count.removeAttribute('disabled');
    } else {
      form.discount_count.setAttribute('disabled', true);
      form.discount_count.value = '';
    }
  });
};
