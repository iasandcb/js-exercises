import { createAvatar } from './api.js';

try {
  const data = await createAvatar({
    hairType: 'long5',
    hairColor: 'black',
    skin: 'tone100',
    clothes: 'hoodie',
    accessories: 'none',
  });
  console.log(data);
} catch (e) {
  if (e.response) {
    // 여기에 코드를 작성하세요.
    console.log(e.response.status);
    console.log(e.response.data);
  }

  createAvatar({
    hairType: 'long5',
    hairColor: 'black',
    skin: 'tone100',
    clothes: 'hoodie',
    accessories: 'none',
  }).catch(e => {
    console.log(e.response.status);
    console.log(e.response.data);
  });
}