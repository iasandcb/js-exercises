const children = document.children;
const htmlEl = children[0]; // root element
const htmlChildren = htmlEl.children;
const bodyEl = htmlChildren[1]; // indexing
const pEl = bodyEl.children[0];
const idAttr = pEl.getAttribute('id');
pEl.setAttribute('id', 'test2'); 
pEl.style.backgroundColor = 'wheat';
pEl.textContent = 'Test again';

const pEl3 = document.createElement('p');
pEl3.textContent = 'Test 3';
bodyEl.append(pEl3); 

const p2El = bodyEl.children[1];
p2El.before(pEl3);