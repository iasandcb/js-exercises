import {
  getAvatars,
  getAvatar,
  createAvatar,
  patchAvatar,
  deleteAvatar,
} from './api.js';

const data1 = await getAvatars();
console.log(data1);

const data2 = await getAvatar(12);
console.log(data2);

const data3 = await createAvatar({
  hairType: 'long1',
  hairColor: 'black',
  skin: 'tone100',
  clothes: 'hoodie',
  accessories: 'none',
});
console.log(data3);

const data4 = await patchAvatar(data3.id, {
  clothes: 'tshirtBasic',
  accessories: 'headset',
});
console.log(data4);

const data5 = await deleteAvatar(data3.id);
console.log(data5);