import { getMenus } from './asyncFunctions.js';

function randomElement(arr) {
  const randomIdx = Math.floor(Math.random() * arr.length);
  return arr[randomIdx];
}

console.log('메뉴 고르는 중...');

try {
  const menus = await getMenus();
  const randomMenu = randomElement(menus);
  console.log(`오늘의 랜덤 메뉴는 ${randomMenu.name}입니다!`);
} catch (error) {
  console.log('데이터를 가져오지 못했습니다 :(');
}

