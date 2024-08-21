export async function getEmployees() {
  try {
    const response = await fetch('https://learn.codeit.kr/api/employees');
    const employees = await response.json();
    return employees;
  } catch (error) {
    console.log('데이터를 가져오지 못했습니다 :(');
    return null;
  }
}

export async function getMenus() {
  try {
    const response = await fetch('https://learn.codeit.kr/api/menus');
    const menus = await response.json();
    return menus;
  } catch (error) {
    console.log('데이터를 가져오지 못했습니다 :(');
    return null;
  }
}
