document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("order-form");
  const productSelect = document.getElementById("product-select");
  const quantityInput = document.getElementById("quantity-input");
  const resultBox = document.getElementById("result-box");
  const errorBox = document.getElementById("error-box");

  // Очистка при вводе (чтобы старый результат исчезал)
  form.addEventListener("input", function () {
    resultBox.textContent = "";
    errorBox.textContent = "";
  });

  // Обработка отправки
  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    resultBox.textContent = "";
    errorBox.textContent = "";

    const quantityValue = quantityInput.value.trim();
    
    if (quantityValue === "") {
      errorBox.textContent = "Ошибка: укажите количество";
      return;
    }

    const quantity = Number(quantityValue);

    if (!Number.isFinite(quantity)) {
      errorBox.textContent = "Ошибка: введите число";
      return;
    }

    if (quantity <= 0 || !Number.isInteger(quantity)) {
      errorBox.textContent = "Ошибка: нужно положительное целое количество";
      return;
    }

    const selectedOption = productSelect.options[productSelect.selectedIndex];
    const unitPrice = Number(selectedOption.value);
    const extraPrice = Number(selectedOption.dataset.extra) || 0;

    const total = unitPrice * quantity + extraPrice;
    const productName = selectedOption.textContent.split('(')[0].trim();

    resultBox.textContent = "Итог: " + productName + " — " + total + " ₽";
  });
});
