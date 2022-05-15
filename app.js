

//const div = document.querySelector('div');
//const titels = document.querySelector('h1');


//const link = div.querySelector('.link');
//console.log(link.parentElement);
//console.log(link.closest('.content')); 

//console.log(div.classList);



   // const div = document.querySelector('div');
   // const titels = document.querySelector('h1');
   // const link = div.querySelector('.link');
   /// console.log(link.parentElement);
 //   console.log(link.closest('.content')); 
  //  console.log(div.classList);
  //  <><div>First div</div><script>
  //  let divs = document.querySelectorAll('div');
  //  alert(divs.length);
//</script><div>Second div</div><script>
 //       alert(divs.length);
 //   </script></>;



 //const title = document.querySelector('h1');
 //title.innerHTML = "<span> Hi</span>";
// title.insertAdjacentHTML("beforebegin", '<h2>title</h2>');

//const span = document.createElement('span');
//span.textContent = 'hello my friends';
//span.classList.add('myClass');
//console.log(span);
//title.appendChild(span);

//const fragment = document.createDocumentFragment();
//console.log(fragment);
//const colors = ["black", "orange", "brown"];
//colors.forEach((color) => {
   // const item = document.createElement("div");
   /// item.classList.add(`bg-${color}`);
   // item.style.background = color;
    //item.textContent = color;
   // fragment.appendChild(item);

//});

//document.body.appendChild(fragment);

//////////////////////////////////////////////////

const btn = document.querySelector('button');
const link = document.querySelector('a');
//btn.onclick = function() {
  //console.log('click');
//};

//btn.addEventListener("click", function(e) {
 // console.log(e);
//});

//btn.addEventListener("click", function() {
 // console.log('click 2')
//});

//btn.addEventListener("click", (e) => {
//  console.log(this);
//console.log(e);
//});

//function clickhander (e) {
 // e.preventDefault();
 // console.log(this);
//console.log('click');
//}

//link.removeEventListener("click", clickhander); 
//link.removeEventListener("click", clickhander); 

const container = document.querySelector(".container");

btn.addEventListener('click',(e) => {
const div = document.createElement('div');
const nastedBtn = document.createElement('button');
div.textContent = Math.random();
nastedBtn.textContent = 'button'
div.appendChild(nastedBtn);
container.appendChild(div);
});

container.addEventListener('click', e => {
console.log(e.target);
if (e.target.tagName === "BUTTON") {
  console.log('button clicked');
}
});










