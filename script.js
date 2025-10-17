let depozit=document.getElementById("depozit")
depozit.oninput=calculateDepozit;

function calculateDepozit(){
    console.log(depozit.value)
}