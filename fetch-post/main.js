const avatarData = {
  hairType: 'short2',
  hairColor: 'brown',
  skin: 'tone200',
  clothes: 'hoodie',
  accessories: 'earbuds',
};

console.log('avatarJSONString', JSON.stringify(avatarData));

const res = await fetch('https://learn.codeit.kr/api/avatars', {
  method: 'POST' ,
  body: JSON.stringify(avatarData),
  headers: {
    'Content-Type': 'application/json',
  },
});

const data = await res.json();
console.log('data', data);
