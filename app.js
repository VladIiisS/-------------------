

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



 const title = document.querySelector('h1');
 //title.innerHTML = "<span> Hi</span>";
// title.insertAdjacentHTML("beforebegin", '<h2>title</h2>');

const span = document.createElement('span');
span.textContent = 'hello my friends';
span.classList.add('myClass');
console.log(span);
title.appendChild(span);

const fragment = document.createDocumentFragment();
//console.log(fragment);
const colors = ["black", "orange", "brown"];
colors.forEach((color) => {
    const item = document.createElement("div");
    item.classList.add(`bg-${color}`);
    item.style.background = color;
    item.textContent = color;
    fragment.appendChild(item);

});

document.body.appendChild(fragment);


