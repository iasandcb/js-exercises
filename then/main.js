function getRandomElement(arr) {
  const randomIdx = Math.floor(Math.random() * arr.length);
  return arr[randomIdx];
}

console.log('메뉴 고르는 중...');

// const response = await fetch('https://learn.codeit.kr/api/menus');
// const menus = await response.json();
// const randomMenu = getRandomElement(menus);
// console.log(`오늘의 랜덤 메뉴는 ${randomMenu.name}입니다!`);

// 1. 콜백 지옥형
// fetch('https://learn.codeit.kr/api/menus').then(
//   response => {
//     response.json().then(
//       menus => {
//         const randomMenu = getRandomElement(menus);
//         console.log(`오늘의 랜덤 메뉴는 ${randomMenu.name}입니다!`);
//       }
//     );
//   }
// );

// 2. 콜백 천국형
// const responsePromise = fetch('https://learn.codeit.kr/api/menus');
// const menuPromise = responsePromise.then(response => {
//   return response.json();
// });
// menuPromise.then((menus) => {
//   const randomMenu = getRandomElement(menus);
//   console.log(`오늘의 랜덤 메뉴는 ${randomMenu.name}입니다!`);
// })

// 3. 연쇄 체인 형
fetch('https://learn.codeit.kr/api/menus')
.then(response => response.json())
.then(menus => {
  const randomMenu = getRandomElement(menus);
  console.log(`오늘의 랜덤 메뉴는 ${randomMenu.name}입니다!`);
});