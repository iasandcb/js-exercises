const members = ['Jay', 'Alex', 'El'];
const [macbook, ipad, coupon] = members;
console.log(macbook);
console.log(ipad);
console.log(coupon);
const macbook1 = members[0];
const ipad1 = members[1];
const coupon1 = members[2];
console.log('coupon1', coupon1);

const macbookPro = {
	title: 'MBP 16',
	price: 4000000
};

const {title, price} = macbookPro;
console.log(title);
console.log(price);
console.log('------------------');
const members2 = ['Jay', 'Alex', undefined, 'Kay', 'El'];
const [mac, pad, airpod = 'Jack', ...coupons] = members2;
console.log(mac);
console.log(pad);
console.log(airpod);
console.log(coupons);
