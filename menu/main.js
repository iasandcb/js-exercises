// 하고 싶은 것
// https://learn.codeit.kr/api/menus API(서버) 에 가서 JSON 문서 데이터를 가져온다.

// const response = fetch('https://learn.codeit.kr/api/menus');
// 프라미스가 반한되었다!
// console.log(response);
// 준배: 하지만, 난 약속 따윈 관심 없어. 선물(프라미스 값) 내놔.
// fetch: 그럴러면 시간이 필요해...(현재는 pending 서버 응답을 기다리며 대기중)
// 준배: 기다리지 뭐.

const gift = await fetch('https://learn.codeit.kr/api/menus');
// console.log(gift);
// 준배: 근데 선물이 왜 이모냥이야. 난 제이슨이 필요하다고!
// gift: 그러면 json 메소드를 불러...
// const json = gift.json();
// 준배: 근데 왜 또 프라미스야.
// gift: JSON 파싱이 오래 걸릴지도 몰라서...
// 준배: 난 JSON을 원한다.
// gift: 그럼 또 기다려.
const jsonResonse = await gift.json();
console.log(jsonResonse);