let screen =document.getElementById("txt")
function keyDownInsert(num){
    screen.innerHTML+=num;
}


function clearText(){
  screen.innerHTML=" ";
}

function del(){
  if(screen.innerHTML === "Nothing to calc!"){
    screen.innerHTML= " ";
  }

  screen.innerHTML = screen.innerHTML.substring(0, screen.innerHTML.length-1)
}

function calculate(){
  if(screen.innerHTML){
    screen.innerHTML = eval(screen.innerHTML)
    if(screen.innerHTML=== "undefined"){
      screen.innerHTML= "Nothing to calc!";
    }
  } 
 
  else {
    screen.innerHTML= "Nothing to calc!";
  }
  
}