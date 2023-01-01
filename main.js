
function playerSelection1 () {
      var1 = "Rock";
      console.log('gamer ' + var1);
      playerSelection();
    } 
function playerSelection2 () {
      var1 = "Papper";
      console.log('gamer ' + var1);
      playerSelection();
    } 
function playerSelection3 () {
      var1 = "Scissors";
      console.log('gamer ' + var1);
      playerSelection();
    } 

function playerSelection() {
    var varPc = getComputerChoice();
    //console.log(varPc);
    console.log('pc 1 ' + varPc);
    document.getElementById("pc").innerHTML = varPc;
    document.getElementById("gamer").innerHTML = var1;
  }

function getComputerChoice() {
    var var2= getRandom(); 
    console.log(var2);
    if (var2<33) {
      //console.log('smaller than rock');
      return ("rock"); // choose Rock
    } else {
        if (var2>66){
          //console.log('greater than papper');
          return ("Papper"); // choose Papper
        } else {          
            //console.log('between scissors');
            return ("Scissor"); // choose Scissor 
          }
      } 
  }    
function getRandom() {
  var random1 = Math.floor(Math.random() * 100) + 1;
  return random1;
}


/*    
function add7 () {
    var var1 = document.getElementById("name1").value;
    var var2 = document.getElementById("name2").value;
    
    if ( isNaN(var1) || isNaN(var2)  === true) {  //isNaN return false if var1 a number 
        alert('first or second number is char');
    }
    else{
        if (isNaN(var1)  === false)
        alert("any number return 7 as result");
    }

    var1 = parseInt(var1); // turn into a int
    var2 = parseInt(var2);
    var d = var1 + var2;
    var c = 8;
    
    console.log('valor de var1 ' + var1);
    document.getElementById("demo").innerHTML = d;
}

    var1 = parseInt(var1); // turn into a int
    var2 = parseInt(var2);
    var d = var1 + var2;
    var c = 8;
    
    console.log('valor de var1 ' + var1);
    document.getElementById("gamer").innerHTML = var1;

function capi() {
    var var3 = document.getElementById("word").value;
    console.log("The word is: " + var3)

    var3 = var3.charAt(0).toUpperCase() + var3.slice(1); //take the first letter, capitalized it, take the rest of the char and link everything
    var lastL = var3.slice(-1); // take the last letter

    console.log("First letter capitalized: " + var3);
    console.log("Last letter: " + lastL);
    document.getElementById("letter").innerHTML = var3;
    document.getElementById("lastletter").innerHTML = lastL;
}

function fizzBuzz() {
    var varFb = parseInt(document.getElementById("numberFb").value);
    console.log("Number " + varFb)
    //if ( isNaN(varFb)  === false) {  //isNaN return false if var1 is a number 
    //    alert('is a number');
    //}
    var arrayFb = new Array();
    arrayFb [0] = "0";
    for (let i = 1; i <= varFb; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
            document.getElementById("resultFizzBuzz").innerHTML = "FizzBuzz";
            arrayFb [i]= " FizzBuzz";
          } else if (i % 3 === 0) {
            console.log("Fizz");
            document.getElementById("resultFizzBuzz").innerHTML = "Fizz";
            arrayFb [i]= " Fizz";
          } else if (i % 5 === 0) {
            console.log("Buzz");
            document.getElementById("resultFizzBuzz").innerHTML = "Buzz";
            arrayFb [i]= " Buzz";
          } else {
            console.log(i);
            document.getElementById("resultFizzBuzz").innerHTML = + i;
            arrayFb [i]=" "+i;
          }
          //console.log(arrayFb);  
          document.getElementById("resultFizzBuzz").innerHTML = arrayFb;
      }

} */