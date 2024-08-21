export async function printMenus() {
  const response = await fetch('https://learn.codeit.kr/api/menus');
  const json = await response.json();
  console.log(json);
}