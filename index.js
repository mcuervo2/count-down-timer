// proyect Count Down Timer

"use strict";
// startTimer(5, "timer");
var myVar; 
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
        clearTimeout(myVar);
        myVar = undefined;
        return;
    }
    secs --;
    myVar = setTimeout(startTimer,1000,secs,elem);
}
// var button = document.getElementById('click');
// button.addEventListener('click', function() {
//    startTimer(2, 'timer')
// });
 

// Vue proyect from Orally

const app = new Vue({
  el: '#events',
    data() {
        return {
            counter: 0,
            name: 'Mike'
        };

    },

methods: {

    add () {
        this.counter ++ ;
    },
    reduce () {
        this.counter--;
    },
       setName(event, name) {
        this.name = even.target.value;
    } 
}
});