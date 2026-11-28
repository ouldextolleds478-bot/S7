console.log("Расчёт магазина электроники");

/* ---------- 1. Массив карточек ---------- */
const catalog = [
  { 
    position: 1, 
    name: "Смартфон", 
    specs: "X-Phone 15 Pro", 
    description: "8 ядер, 256 ГБ, камера 48 Мп", 
    image: "images/phone.jpg" 
  },
  { 
    position: 2, 
    name: "Наушники", 
    specs: "AirBass Max", 
    description: "Беспроводные, шумоподавление", 
    image: "images/headphones.jpg" 
  },
  { 
    position: 3, 
    name: "Умные часы", 
    specs: "Watch Series 9", 
    description: "AMOLED, GPS, влагозащита", 
    image: "images/watch.jpg" 
  }
];

/* ---------- 2. Расчёт по выбранной записи ---------- */
const itemName = "Смартфон";
const quantityText = "2";
const unitValue = 50000; // Цена за 1 шт.
const extraValue = 0; // Без доплаты

const isTraining = true;

function getResult(quantityText, unitAmount, extraAmount) {
  if (quantityText.trim() === "") return "Ошибка: укажите количество";
  const quantity = Number(quantityText);
  if (!Number.isFinite(quantity)) return "Ошибка: введите число";
  if (quantity <= 0 || !Number.isInteger(quantity)) return "Ошибка: нужно положительное целое количество";
  return "Итог: " + (unitAmount * quantity + extraAmount) + " ₽";
}

/* ---------- 3. Работа со списком в консоли ---------- */
const names = catalog.map(item => item.name);
const longNames = catalog.filter(item => item.name.length >= 6);
const found = catalog.find(item => item.name === "Смартфон");

/* ---------- 4. DOM: Поиск элементов и вывод ---------- */
const status = document.querySelector("#status");
if (status) {
  status.textContent = "В каталоге " + catalog.length + " товара";
}

/* ---------- 5. DOM: Создание элементов ---------- */
const namesList = document.querySelector("#names");

function renderNames() {
  if (!namesList) return;
  namesList.replaceChildren(); // Очищаем список
  
  for (const item of catalog) {
    const line = document.createElement("li");
    line.style.marginBottom = "20px"; // Отступ между товарами
    
    // Картинка
    if (item.image) {
      const photo = document.createElement("img");
      photo.src = item.image;
      photo.alt = item.name;
      photo.style.width = "100px";
      photo.style.display = "block";
      photo.style.marginBottom = "10px";
      photo.style.borderRadius = "8px";
      line.append(photo);
    }

    // Текст
    const text = document.createElement("span");
    text.textContent = item.name + " (" + item.specs + ") — " + item.description;
    line.append(text);

    namesList.append(line);
  }
}

// Запускаем отрисовку списка в память (он скрыт по умолчанию)
renderNames();

/* ---------- 6. Логика кнопок Показать/Скрыть ---------- */
const btnShow = document.getElementById("show-names");
const btnHide = document.getElementById("hide-names");

if (btnShow && btnHide && namesList) {
  btnShow.addEventListener("click", function() {
    namesList.style.display = "block"; // Показываем список
  });

  btnHide.addEventListener("click", function() {
    namesList.style.display = "none"; // Скрываем список
  });
}
