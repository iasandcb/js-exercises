export async function getAvatars(params = {}) {
  const url = new URL('https://learn.codeit.kr/api/avatars');
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export async function getAvatar(id) {
  const res = await fetch(`https://learn.codeit.kr/api/avatars/${id}`);
  const data = await res.json();
  return data;
}

export async function createAvatar(avatarData) {
  const res = await fetch('https://learn.codeit.kr/api/avatars', {
    method: 'POST',
    body: JSON.stringify(avatarData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    const message = await res.text();
    throw new Error(message);
  }

  const data = await res.json();
  return data;
}

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

export async function deleteAvatar(id) {
  const res = await fetch(`https://learn.codeit.kr/api/avatars/${id}`, {
    method: 'DELETE',
  });
  const data = await res.json();
  return data;
}