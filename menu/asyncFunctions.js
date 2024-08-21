// 밖에서 쓰고 싶어서. 수출. export
// 함수 본문 안에 await이 있어서(기다려야 하니까) 그러면 나는 async(비동기)
// 함수니까 function
// printMenus는 함수 이름
export async function printMenus() {
  const gift = await fetch('https://learn.codeit.kr/api/menus');
  const jsonResonse = await gift.json();
  console.log(jsonResonse);
}