//Random number generator
$(document).ready(function(){
    var mysteryNumber= Math.floor(Math.random() *101+19)
    $("#randomNumber").text(" " + mysteryNumber);
})


//Variables

var num1 = Math.floor(Math.random()* 11+1)
var num2 = Math.floor(Math.random()* 11+1)
var num3 = Math.floor(Math.random()* 11+1)
var num4 = Math.floor(Math.random()* 11+1)

var total= 0;
var wins= 0;
var losses= 0;

$("#wins").text(wins);
$("#losses").text(losses);


//Reset function
function reset(){
    mysteryNumber= Math.floor(Math.random() *101+19);
    $("#randomNumber").text(" " + mysteryNumber);
    num1= Math.floor(Math.random()*11+1);
    num2= Math.floor(Math.random()*11+1);
    num3= Math.floor(Math.random()*11+1);
    num4= Math.floor(Math.random()*11+1);
    total= 0;
    $("#score").text(total);
}



function winner(){
    alert("You Win!");
    $('audio#victory')[0].play();
    wins++; 
    $('#numberWins').text(wins);
    reset();
}


function loser(){
    alert ("You lose!");
    $('audio#fail')[0].play();
      losses++;
      $('#numberLosses').text(losses);
      reset()
    }

    $('#item1').on ('click', function(){
        total = total + num1;
        console.log("New total= " + total);
        $('#score').text(total); 
    });