export async function getMenus() {
  // 여기에 코드를 작성하세요.
  try {
    return await 
    (
      await fetch('https://learn.codeit.kr/api/menus')
    ).json();
  } catch (error) {
    throw error;
  } finally {
    console.log('getMenus() 함수가 끝났습니다.');
  }
}
