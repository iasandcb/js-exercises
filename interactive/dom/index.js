const children = document.children;
const htmlEl = children[0]; // root element
const htmlChildren = htmlEl.children;
const bodyEl = htmlChildren[1]; // indexing 인덱싱 1
const pEl = bodyEl.children[0];
const idAttr = pEl.getAttribute('id');
pEl.setAttribute('id', 'test2'); // 조작
pEl.style.backgroundColor = 'wheat';
pEl.textContent = 'Test2';

const bodyEl = document.querySelector('body');
const pEl = document.createElement('p');
pEl.textContent = 'Hello';
const p2El = bodyEl.children[1];
p2El.remove();
p2El.before(pEl);

bodyEl.append(pEl); 
bodyEl.prepend(pEl);