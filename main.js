var counter = [];

function playerSelection1 () {
      varGm = "Rock";
      removeBlue();
      playRound();
      document.getElementById("playerSelection1").classList.add("blue");
    } 
function playerSelection2 () {
      varGm = "Papper";
      removeBlue();
      playRound();
      document.getElementById("playerSelection2").classList.add("blue");
    } 
function playerSelection3 () {
      varGm = "Scissors";
      removeBlue();
      playRound();
      document.getElementById("playerSelection3").classList.add("blue");
    } 

function playRound() {

    var varPc = getComputerChoice(); //get the pc choice for the game round
    console.log('gamer: ' + varGm +', pc: ' + varPc);
    //document.getElementById("pc").innerHTML = varPc;
    //document.getElementById("gamer").innerHTML = varGm;
 
      if (varPc==="Rock" && varGm==="Scissors"){  //winner options star
        var varRound = "You lose";
      }
      if (varPc==="Rock" && varGm==="Papper"){
        varRound = "Pc loses";
      }
      if (varPc==="Papper" && varGm==="Scissors"){
        varRound = "Pc loses";
      }
      if (varPc==="Papper" && varGm==="Rock"){
        varRound = "You lose";
      }
      if (varPc==="Scissors" && varGm==="Rock"){
        varRound = "Pc loses";
      }
      if (varPc==="Scissors" && varGm==="Papper"){ 
        varRound = "You lose";
      }  
      if (varGm === varPc) {               //winner options end
        varRound = "Tied";
      } 

    counter.push(varRound);  // round counter section using a arrays adding new item
    console.log('Counter ' + counter.length);
    console.log(counter);
    document.getElementById("round").innerHTML = varRound +", Round "+counter.length +" of 5";
    
    var a=0, b=0, c=0;
    for(let j=0; j<(counter.length); j++){ // this one count how much 
      if(counter[j]==="Tied"){
       a = a+1 ;
       console.log("var a " +a);
      }
      if(counter[j]==="You lose"){
       b = b+1;
       console.log("var b "+b);
      }
      if(counter[j]==="Pc loses"){
       c = c+1 ;
       console.log("var c "+c);
      } 
   //console.log("Again and again " +a +', ' +b +', '+c); 
   }
   document.getElementById("pc").innerHTML = b;
   document.getElementById("gamer").innerHTML = c;
    
    if ((counter.length % 5) === 0) {
      if(b === c){
        console.log("Game tied");
      }
      if(c > b){
        varRound="Gamer wins";
      }
      if(b > c){
        varRound="Pc wins";
      }
      if(a === 5){ 
        varRound="Nobody wins";
      }
      document.getElementById("round").innerHTML = "Fifth round, " +varRound +" the Game"+"<br>"+"<br>"+"Start again, wins the highest score in 5 rounds"; 
      counter.length = 0;//array to cero again
    }                    // round counter section end   
  }

function getComputerChoice() {
    var varCt= getRandom(); 
    //console.log(var2);
    if (varCt<33) {
      removeBluePc();
      document.getElementById("pcrock").classList.add("blue");
      return ("Rock"); // choose Rock
    } else {
        if (varCt>66){
          removeBluePc();
          document.getElementById("pcpapper").classList.add("blue");
          return ("Papper"); // choose Papper
        } else {          
            removeBluePc();
            document.getElementById("pcscissor").classList.add("blue");
            return ("Scissors"); // choose Scissor             
          }
      } 
  }    
function getRandom() {
  var random1 = Math.floor(Math.random() * 100) + 1;
  return random1;
}
function removeBlue() {
  document.getElementById("playerSelection1").classList.remove("blue");
  document.getElementById("playerSelection2").classList.remove("blue");
  document.getElementById("playerSelection3").classList.remove("blue");
}
function removeBluePc() {
  document.getElementById("pcrock").classList.remove("blue");
  document.getElementById("pcpapper").classList.remove("blue");
  document.getElementById("pcscissor").classList.remove("blue");
}