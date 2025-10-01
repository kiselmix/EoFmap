// Функция для показа/скрытия кнопки
window.onscroll = function() {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
};

// Функция для скролла наверх с jQuery (надежнее)
document.getElementById("scrollToTopBtn").onclick = function() {
  console.log("Button clicked"); // Отладка: проверьте консоль при клике
  $('html, body').animate({ scrollTop: 0 }, 100); // Скролл наверх за 500ms
};
