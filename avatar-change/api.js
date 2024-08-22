// getAtavars -> 복수 plural RESTful avatars: 목록 
export async function getAvatars(params = {}) {
  const url = new URL('https://learn.codeit.kr/api/avatars');
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

// getAvatar 단수 singluar id /avatar/3
export async function getAvatar(id) {
  // try {
    const res = await fetch(`https://learn.codeit.kr/api/avatars/${id}`);
    // const text = await res.text();
    // 응답 객체의 본문 Body -> 소비가 됐다. 다 썼다. 더 쓸 수가 없다.
    // 응답 객체에서 본문 바디 전체를 가져오는 작업은 딱 한번만 할 수 있다.
    // console.log('text', '*' + text + '*');
    console.log('res', res);
    const data = await res.json();
    return data;  
  // } catch (error) {
  //   return null;
  // }
}

// /avatars -> 복수 plural: 신규생성
export async function createAvatar(avatarData) {
  const res = await fetch('https://learn.codeit.kr/api/avatars', {
    method: 'POST',
    body: JSON.stringify(avatarData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  return data;
}

// singular 단수 ID
export async function patchAvatar(id, avatarData) {
  const res = await fetch(`https://learn.codeit.kr/api/avatars/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(avatarData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  return data;
}

// singular 단수 ID
export async function deleteAvatar(id) {
  const res = await fetch(`https://learn.codeit.kr/api/avatars/${id}`, {
    method: 'DELETE',
  });
  const data = await res.json();
  return data;
}