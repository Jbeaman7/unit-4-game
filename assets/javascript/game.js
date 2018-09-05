//Random number generator
$(document).ready(function(){
    var mysteryNumber= Math.floor(Math.random() *101+19)
    $("#randomNumber").text(" " + mysteryNumber);



//Variables

var num1 = Math.floor(Math.random()* 11+1)
var num2 = Math.floor(Math.random()* 11+1)
var num3 = Math.floor(Math.random()* 11+1)
var num4 = Math.floor(Math.random()* 11+1)

var total= 0;
var wins= " ";
var losses= " ";

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
    $("#score").text(" ");
}



function winner(){
    alert("You Win!");
    $('audio#victory')[0].play();
    wins++; 
    $('#wins').text("Wins: " + wins);
    reset();
}


function loser(){
    alert ("You lose!");
    $('audio#fail')[0].play();
      losses++;
      $('#losses').text("Losses: " + losses);
      reset()
    }

        $('#item1').on ('click', function(){
            $('audio#click')[0].play();
            total = total + num1;
            
            $('#score').text(" " + total); 
            if (total === mysteryNumber){
                winner();
              }
              else if (total > mysteryNumber){
                loser();
              }   
        });

        $('#item2').on ('click', function(){
            $('audio#click')[0].play()
            total = total + num2;
            
            $('#score').text(" " + total); 
            if (total === mysteryNumber){
                winner();
              }
              else if (total > mysteryNumber){
                loser();
              } 
        });

        $('#item3').on ('click', function(){
            $('audio#click')[0].play()
            total = total + num3;
            
            $('#score').text(" " + total); 
            if (total === mysteryNumber){
                winner();
              }
              else if (total > mysteryNumber){
                loser();
              }   
        });

        $('#item4').on ('click', function(){
            $('audio#click')[0].play()
            total = total + num4;
            
            $('#score').text(" " + total); 
            if (total === mysteryNumber){
                winner();
              }
              else if (total > mysteryNumber){
                loser();
              }   
        });
    })