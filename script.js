var tabEl = document.querySelectorAll('a[data-bs-toggle="tab"]')
tabEl.forEach(function (tab) {
  tab.addEventListener('click', function () {
    tabEl.forEach(function (el) {
      el.classList.remove('active');
    });
    tab.classList.add('active');
  });
});  