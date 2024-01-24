var inp=document.getElementById("ip");
var items=document.getElementById("list");
function adder(){
    var el=document.createElement('h2');
    el.innerHTML="<button onclick='deleter(event)' class='b2'>X</button> "+inp.value;
    items.append(el);
}
function deleter(event){
    event.target.parentElement.remove();
}
function handleKeyPress(event) {
    if (event.key === "Enter") {
        adder();
    }
}