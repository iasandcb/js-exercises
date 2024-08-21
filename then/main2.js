function getRandomElement(arr) {
  const randomIdx = Math.floor(Math.random() * arr.length);
  return arr[randomIdx];
}

fetch('https://learnnnn.codeit.kr/api/menus')
.catch(error => {
  console.log('error in fetch');
})
.then(response => response.json())
.catch(error => {
  console.log('error in json');
})
.then(menus => {
  const randomMenu = getRandomElement(menus);
  console.log(`오늘의 랜덤 메뉴는 ${randomMenu.name}입니다!`);
})
.catch(error => {
  console.log('error in menu');
})
.finally(() => {
  console.log('finally');
});