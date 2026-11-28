document.addEventListener("DOMContentLoaded", function () {
  // Данные для каталога (добавил картинки)
  const products = [
    { id: 1, name: "Смартфон", specs: "X-Phone 15 Pro", desc: "8 ядер, 256 ГБ, камера 48 Мп", price: 50000, image: "images/phone.jpg" },
    { id: 2, name: "Наушники", specs: "AirBass Max", desc: "Беспроводные, шумоподавление", price: 15000, image: "images/headphones.jpg" },
    { id: 3, name: "Умные часы", specs: "Watch Series 9", desc: "AMOLED, GPS, влагозащита", price: 25000, image: "images/watch.jpg" }
  ];

  const container = document.getElementById("catalog-container"); // Контейнер для карточек
  const searchInput = document.getElementById("search"); // Поле поиска

  // Функция отрисовки карточек
  function renderCards(list) {
    if (!container) return;
    container.innerHTML = "";

    if (list.length === 0) {
      container.innerHTML = "<p>Товары не найдены</p>";
      return;
    }

    list.forEach(function (item) {
      const card = document.createElement("div");
      card.className = "card";
      
      // Формируем карточку вместе с картинкой
      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" style="width: 100%; max-height: 200px; object-fit: contain; margin-bottom: 15px;">
        <h3>${item.name}</h3>
        <div class="specs"><strong>${item.specs}</strong></div>
        <div class="desc">${item.desc}</div>
        <div class="price" style="font-weight: bold; margin-top: 10px; color: #5c2c68;">${item.price} ₽</div>
      `;
      
      container.append(card);
    });
  }

  // Запуск при загрузке страницы
  renderCards(products);

  // Логика поиска
  if (searchInput) {
    searchInput.addEventListener("input", function (e) {
      const query = e.target.value.toLowerCase().trim();
      const filtered = products.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.specs.toLowerCase().includes(query) ||
        item.desc.toLowerCase().includes(query)
      );
      renderCards(filtered);
    });
  }
});
