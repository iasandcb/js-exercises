// 모방은 창조의 어머니
// 목적: index.html의 p 요소를 얻어오고 싶다.
const pElement = document.querySelector('p');
// const pElement = document.getElementsByTagName('p')[0];
console.log(pElement);
pElement.addEventListener('click', function(event) {
  console.log(event);
});