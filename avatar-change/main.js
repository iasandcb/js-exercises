import { createAvatar, patchAvatar, deleteAvatar, getAvatar } from './api.js';

let avatar = await createAvatar({
  hairType: 'long1',
  hairColor: 'black',
  skin: 'tone300',
  clothes: 'collarBasic',
  accessories: 'headset'
});
avatar = await patchAvatar(avatar.id, {
  hairType: 'short3',
  hairColor: 'blonde',
});

console.log(avatar);
await deleteAvatar(avatar.id);
const deletedAvatar = await getAvatar(avatar.id);
console.log(deletedAvatar);