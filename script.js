let depozit=document.getElementById("depozit")
depozit.oninput=calculateDepozit;

let time=document.getElementById("time")
time.innerHtml="<option>1</option>"
time.onchange=calculateDepozit;

let stavka=document.getElementById("stavka")
stavka.oninput=calculateDepozit;

function calculateDepozit(){
    
    console.log(depozit.value)
    let sum1=depozit.value;
    let bylo=document.getElementById("sum1")
    bylo.innerHTML=sum1
    let stanet=document.getElementById("sum2")
    let sum2=Math.round(sum1*(1+stavka.value*0.01)**(time.value/12))
    stanet.innerHTML=sum2
    document.getElementById("before_height").style.height=(sum2/sum1)*120+"px";
}
calculateDepozit()