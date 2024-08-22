import { createAvatar } from './api.js';

try {
  const newAvatar = await createAvatar({
    hairColor: 'brown',
    skin: 'tone200',
    clothes: 'hoodie',
    accessories: 'earbuds',
  });
  console.log(newAvatar);
} catch (e) {
  console.log(e.message);
}

try {
  const newAvatar = await createAvatar({
    hairType: 'short2',
    hairColor: 'green',
    skin: 'tone200',
    clothes: 'hoodie',
    accessories: 'earbuds',
  });
  console.log(newAvatar);
} catch (e) {
  console.log(e.message);
}