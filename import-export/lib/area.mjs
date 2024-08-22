// 여기에 코드를 작성하세요.
// 퀘스트: area.mjs 파일에서 circle() 함수를 default export해 주세요. 

import { PI } from './calculator.mjs';

function circle(x) { 
  return PI * x * x;
}

function square(x) {
  return x * x;
}

function triangle(w, h) {
  return w * h * 0.5;
}

export default {
  cir : circle,
  squ : square,
  tri : triangle
};