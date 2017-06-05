function werkgever() {
  if (werkgever == 'komen loeren in mijn code') {
    var Thomas = 'aangenomen';
  }
  else {
    return 'ook aangenomen'
  }
}

let vaardigheden = [" ", "Flexibel", "Gemotiveerd", "Dynamisch", "Flexibel", "Creatief", "Teamplayer", "Klantvriendelijk", "Communicatief", "Leergierig"];
let eigen = document.getElementById("eigenschap");
let teller = 0;

function vaardighedenloop() {
  teller++;
  eigen.style.opacity = 1;
  eigen.style.transition = "all 500ms";
  eigen.innerHTML = vaardigheden[teller];
  if (teller == 9) {
    teller = 0;
  }
}
setInterval(vaardighedenloop, 5000)

let teller2 = 0;
setInterval(function() {
  teller2++;
  if (teller2 == 4) {
    teller2 = -1;
    eigen.style.opacity = 0;
  }
}, 1000)
