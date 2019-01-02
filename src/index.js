/*
const titleList = document.querySelectorAll('.mission-title-list-item');
let current = 0;

setInterval(
    () => {
      titleList[current].classList.remove('mission-title-list-item--show');
      current = (current + 1) % titleList.length;
      titleList[current].classList.add('mission-title-list-item--show');
    },
    2500
);
*/

const garmFormItems = document.querySelectorAll('.garm-form-item');

for (let formItem of garmFormItems) {
  formItem.children[0].addEventListener('input', function () {
    if (!this.value) return;
    formItem.children[1].classList.add('label--active')
  });

  if (formItem.children[0].value) {
    formItem.children[1].classList.add('label--active')
  }
}
