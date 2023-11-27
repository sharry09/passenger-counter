let count=0;

var incValue=document.getElementById("count-el");
var saveEl=document.getElementById("save-el");
function incrementPass(){
count += 1;
incValue.textContent=count;
}

function saveCount(){
var textEl=count+" - "
saveEl.innerHTML+=textEl
//  console.log(count);
incValue.textContent=0;
count=0;
}
