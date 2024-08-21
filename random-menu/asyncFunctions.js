export async function getMenus() {
  const response = await fetch('https://learn.codeit.kr/api/menus');
  const menus = await response.json();
  return menus;
}
