"use strict"

let name1 = 'John';

function makeUppercase(word){
  return word.toUpperCase();
}

let template =
`<h1>${makeUppercase('Hello')}, ${name1}</h1>
<p>This is a simple template in JavaScript</p>`;

document.getElementById('template').innerHTML = template;