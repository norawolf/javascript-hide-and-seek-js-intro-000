function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target');
}

function increaseRankBy(n) {
  const list = document
  .getElementById('app')
  .querySelectorAll('ul.ranked-list li');

for (let i = 0; i < list.length; i++) {
  list[i].innerHTML = (i + n).toString();
}
}
