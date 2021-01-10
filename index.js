// proyect Count Down Timer
startTimer(5, "timer");
function startTimer(secs, elem) {
    let t = document.getElementById(elem);
    if (secs.toString().length == 1) {
       t.innerHTML = "<h1>00:0" + secs + "</h1>";  
    }
   else{
    t.innerHTML = "<h1>00" + secs + "</h1>";   
   }
    if (secs<1) {
        t.innerHTML = "<h1>00:00</h1>";
        clearTimeout("countDown");
    }
    secs --;
    setTimeout(startTimer,1000,secs,elem);

}