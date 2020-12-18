

function start(){
  document.getElementById("initial-box").style.display="none";
  document.getElementById("quiz1").style.visibility="visible";
}

function next12(){
  document.getElementById("quiz1").style.display="none";
  document.getElementById("quiz2").style.visibility="visible";
}
function next23(){
  document.getElementById("quiz2").style.display="none";
  document.getElementById("quiz3").style.visibility="visible";
}
function next34(){
  document.getElementById("quiz3").style.display="none";
  document.getElementById("quiz4").style.visibility="visible";
}
function next45(){
  document.getElementById("quiz4").style.display="none";
  document.getElementById("quiz5").style.visibility="visible";
}


function check(){
  var answer1 = document.quiz1.answer1.value;
  var answer2 = document.quiz2.answer2.value;
  var answer3 = document.quiz3.answer3.value;
  var answer4 = document.quiz4.answer4.value;
  var answer5 = document.quiz5.answer5.value;
  var correct = 0;

    if (answer1 == "Cascading Style Sheets") {
      correct++; 
    }
    if (answer2 == "background-color"){
      correct++;
    }
    if (answer3 == "Organizing information"){
      correct++;
    }

    if (answer4 == "border-radius"){
      correct++;
    }

    if (answer5 == "h1"){
      correct++;
    }

  var message = ["Don't give up!", "Keep studying and try again!", "Great Job!"]
  var gif = ["img/bad.gif", "img/avarage.gif","img/good.gif" ]
      if  (correct < 2){
          range = 0;
      }
    
        if  (correct > 1 && correct < 5){
          range = 1;
      }

      if (correct > 4){
        range = 2;
      }
  
  document.getElementById("quiz5").style.display="none";
  document.getElementById("feedback").style.visibility="visible";
  
  document.getElementById("number-correct").innerHTML = "You got " + correct + " correct.";
  document.getElementById("message").innerHTML = message[range];
  document.getElementById("gif").src = gif[range];
}

/*twitter button*/
window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));