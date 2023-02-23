var data = document.querySelector("#paragraph");
var findel = document.querySelector("#find");
var repword = document.querySelector("#replace");
var butt = document.querySelector("#go");
let find;
let rep;
let par;
let check;

function findandreplace() {
    par = data.value;
    find = findel.value;
    rep = repword.value;
    // console.log(par);
    // console.log(find);
    // console.log(rep);
    check = par.replace(find, rep);
    data.value = check;
}


butt.addEventListener("click", findandreplace);