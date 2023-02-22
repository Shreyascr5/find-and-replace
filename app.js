var getfind = document.getElementById("find");
var getreplace = document.getElementById("replace");
var getPara = document.querySelector("#paragraph");
var butt = document.getElementById("go");

function dofindreplace() {
    let p = getPara.value;
    let find = getfind.value;
    let rep = getreplace.value;
    console.log(find);
    console.log(rep);
    console.log(p);
    // getPara.value = p.value.replace(find, rep);
    while (find) {

    }
}

butt.addEventListener("click", dofindreplace);