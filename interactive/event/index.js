const item = document.querySelectorAll('.item')[0];
// 이벤트를 요소에 단다(추가한다)
item.addEventListener('click', function(event) {
  console.log('li target', event.target);
  console.log('li current target', event.currentTarget);
});

const list = document.querySelector('#list');
list.addEventListener(
  'click', 
  function(event) {
    if (event.target.className === 'item') {
      console.dir(event.target);
    }
    console.log('ol current target', event.currentTarget);
  }
);