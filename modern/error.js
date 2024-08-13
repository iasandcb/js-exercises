// throw new TypeError('타입 에러가 났습니다.');
console.log('Start---------------------');
try {
 // 에러가 날 소지가 있는 코드들... 
 console.log('try');
//  console.log('name', name);
 console.log('try again');
} catch (error) {
  console.log('error');
} 
finally {
  console.log('finally');
  // 항상 실행
}

console.log('End---------------------');