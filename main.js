var counter = [];
//document.getElementById("round").innerHTML = "Wins how get the highest score in 5 roounds"; 
var a=0;

function playerSelection1 () {
      varGm = "Rock";
      playRound();
    } 
function playerSelection2 () {
      varGm = "Papper";
      playRound();
    } 
function playerSelection3 () {
      varGm = "Scissors";
      playRound();
    } 

function playRound() {

    var varPc = getComputerChoice(); //get the pc choice for the game round
    console.log('gamer: ' + varGm +', pc: ' + varPc);
    document.getElementById("pc").innerHTML = varPc;
    document.getElementById("gamer").innerHTML = varGm;
 
      if (varPc==="Rock" && varGm==="Scissors"){  //winner options star
        var varRound = "You lose";
        console.log("You lose");
        document.getElementById("round").innerHTML = varRound; 
      }
      if (varPc==="Rock" && varGm==="Papper"){
        varRound = "Pc loses";
        console.log("Pc Loses");
        document.getElementById("round").innerHTML = varRound; 
      }
      if (varPc==="Papper" && varGm==="Scissors"){
        varRound = "Pc loses";
        console.log("Pc loses");
        document.getElementById("round").innerHTML = varRound; 
      }
      if (varPc==="Papper" && varGm==="Rock"){
        varRound = "You lose";
        console.log("You lose");
        document.getElementById("round").innerHTML = varRound; 
      }
      if (varPc==="Scissors" && varGm==="Rock"){
        varRound = "Pc loses";
        console.log("Pc loses");
        document.getElementById("round").innerHTML = varRound; 
      }
      if (varPc==="Scissors" && varGm==="Papper"){ 
        varRound = "You lose";
        console.log("You lose");
        document.getElementById("round").innerHTML = varRound; 
      }  
      if (varGm === varPc) {               //winner options end
        varRound = "Tied";
        console.log("Tied");
        document.getElementById("round").innerHTML = varRound; 
        //var winner = 
      } 

    counter.push(varRound);  // round counter section using a arrays adding new item
    console.log('Counter ' + counter.length);
    console.log(counter);
    
    if ((counter.length % 5) === 0) {
      var a=0, b=0, c=0;
      for(let i=0; i<5; i++){ // this for count how much 
         if(counter[i]==="Tied"){
          a = a+1 ;
          //console.log("var a " +a);
         }
         if(counter[i]==="You lose"){
          b = b+1;
          //console.log("var b "+b);
         }
         if(counter[i]==="Pc loses"){
          c = c+1 ;
          //console.log("var c "+c);
         } 
      console.log("Again and again " +a +', ' +b +', '+c); 
      }

      if(a === 5){
        varRound="Nobody wins";
      }
      if(b === c){
        console.log("tied as well");
      }
      if(c > b){
        varRound="Gamer wins";
        var winCounter=counter.indexOf("Pc lose");
      }
      if(b > c){
        varRound="Pc wins";
        winCounter=counter.indexOf("You lose");
      }
      console.log("fifth round");
      document.getElementById("round").innerHTML = "Fifth round, " +varRound +" "  +" the Game"; 
      counter.length = 0;//array to cero agains
    }                    // round counter section end   
  }

function getComputerChoice() {
    var varCt= getRandom(); 
    //console.log(var2);
    if (varCt<33) {
      //console.log('smaller than 33 rock');
      return ("Rock"); // choose Rock
    } else {
        if (varCt>66){
          //console.log('greater than 66 papper');
          return ("Papper"); // choose Papper
        } else {          
            //console.log('between scissors');
            return ("Scissors"); // choose Scissor 
          }
      } 
  }    
function getRandom() {
  var random1 = Math.floor(Math.random() * 100) + 1;
  return random1;
}

