// 속성으로 객체를 관찰
const children = document.children; 
const htmlEl = children[0]; // root element <html> // 변수 이름에는 기능이 없다. 줄일려고. htmlElement
const htmlChildren = htmlEl.children;
const bodyEl = htmlChildren[1]; // indexing
let pEl = bodyEl.children[0];

// 메소드로 객체를 관찰
const idAttr = pEl.getAttribute('id'); // idAttr = "test"

// 메소드로 객체를 조작
pEl.setAttribute('id', 'test2'); 

// 속성으로 객체를 조작
pEl.textContent = 'Test again'; 

pEl.style.backgroundColor = 'wheat';

const pEl3 = document.createElement('p');
pEl3.textContent = 'Test 3';
bodyEl.append(pEl3); 

const p2El = bodyEl.children[1];
p2El.before(pEl3);
console.log('status', p2El.dataset.status);
p2El.dataset.status = 'done';


// console.log('p outer', pEl.outerHTML);
pEl.outerHTML = '<p id="test4">Test 4</p>';
// 아예 새로 요소가 생긴다.
// pEl은 이 이후로 새로 생긴 요소를 가리키지 못한다.
pEl = document.querySelector('#test4');
// console.log('PE', pEl);