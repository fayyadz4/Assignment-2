var turn = 2;
var position = [0,0];
var dice;
var reset = 1;
var result = document.querySelector('.result');
var btn= document.querySelector('#diceRoll');

btn.addEventListener('click', function(){roll()});

function roll(){
  if (reset == 0){
    display.innerHTML = "";
    reset=1;
    turn = 2;
  }

  if (turn == 1){
    turn = 2;
    dice = Math.floor(Math.random() * 6) + 1;
    position[turn-1] += dice;
    result.innerHTML += "Player 2 rolled " + dice + "<br/>" ;

  if (position[turn-1] >= 25){
    result.innerHTML += "Player 2 wins!!";
    position[0] = 0;
    position[1] = 0;
    reset = 0;
  }
  else {
    result.innerHTML += "Player 2 moved is in " + position[turn-1]  + "<br/>";
  }
}

  else if (turn == 2){
    turn = 1;
    dice = Math.floor(Math.random() * 6) + 1;
    position[turn-1] += dice;
    result.innerHTML += "Player 1 rolled " + dice  + "<br/>";

  if (position[turn-1] >= 25){
    result.innerHTML += "Player 1 wins!!";
    position[0] = 0;
    position[1] = 0;
    reset = 0;
  }
   else {
   result.innerHTML += "Player 1 moved is in " + position[turn-1] + "<br/>" ;
   }
 }

 else;
 if(position[turn-1] == 15){
   position[turn-1] = 5;
   result.innerHTML += "Player " + turn + " being eaten by a snake! Player " + turn + " is now in position 5" + "<br/>";
 }

 else if (position[turn-1] == 23){
   position[turn-1] = 16;
   result.innerHTML += "Player " + turn + " being eaten by a snake! Player " + turn + " is now in position 16" + "<br/>";
 }

 else if (position[turn-1] == 8){
   position[turn-1] = 15;
   result.innerHTML += "Player " + turn + " found a ladder! Player " + turn + " will climb to position 15" + "<br/>";
 }
 else if (position[turn-1] == 19){
   position[turn-1] = 24;
   result.innerHTML += "Player " + turn + " found a ladder! Player " + turn + " will climb to position 24" + "<br/>";
 }
 else;
}
