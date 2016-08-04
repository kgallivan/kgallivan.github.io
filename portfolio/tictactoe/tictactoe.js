$(document).ready(function(){

//we created a variable that sets the clicks to zero and the value of each index in our array to zero
var clicks=0;
var array= [0,0,0,0,0,0,0,0,0];

//we created a function that changes the H1(our header) to who wins which is triggered by our function findSum(array).
function whoWon(array){
 if (findSum(array)===3) {
   $("h1").text($("#player1").val() + " Wins!");
   $(".box").unbind('click');

 }
 else if (findSum(array)=== -3){
   $("h1").text($("#player2").val() + " Wins!");
   $(".box").unbind('click');
 }
 else {
   return "null";
 }
};

//we created a function that includes all possible winning combos for player 1 and player 2. if the table data(individual box) add up to 3, then it returns the value which triggers function whoWins.
function findSum(array)
{
 if (sum (array,0,1,2)===3 ||
   sum (array,3,4,5)===3 ||
   sum (array,6,7,8)===3 ||
   sum (array,0,3,6)===3 ||
   sum (array,1,4,7)===3 ||
   sum (array,2,5,8)===3 ||
   sum (array,0,4,8)===3 ||
   sum (array,2,4,6)===3){
   return 3;
   }
 else if (sum (array,0,1,2)===-3 ||
   sum (array,3,4,5)===-3 ||
   sum (array,6,7,8)===-3 ||
   sum (array,0,3,6)===-3 ||
   sum (array,1,4,7)===-3 ||
   sum (array,2,5,8)===-3 ||
   sum (array,0,4,8)===-3 ||
   sum (array,2,4,6)===-3){
   return -3;
   }
  else return 0;

};
//this function returns the sum of the index of our table data boxes which is then used for findSum(array) to find potential winning arrays
function sum(array,x,y,z){
  return array[x]+array[y]+array[z];

 };
//this unbinds the table data and determines if clicks are odd or even and assigns appropriate picture
function handleClickOnElement(element) {
  element.unbind('click');
  if (clicks%2 === 0) {
    element.append('<img src="apple_mac_os_x_snow_leopard_for_mac512x512.png">');

    array[parseInt(element.attr("id"))]=1; //takes the "#0" and takes the "id" attribute and parses it into an integer. so it can be used as an index number which is then assigned an appropriate value.

  } else {
    element.append('<img src="hero_lion.png">');
    array[parseInt(element.attr("id"))]=-1;

  }

//clicks add one click for click counter and changes H1 if 9 clicks have been reached and the board is full.
  clicks++;
  if (clicks>8){
  $("h1").text("Board full, start a new game");
  };
  console.log(array);
  console.log(whoWon(array));
};

//this takes the "id" assigned to each td box and runs in the handleClickOnElement function. This also allows the td boxes to be click functions.
  $("#0").click(function(){
    handleClickOnElement($("#0"));
  });

  $("#1").click(function(){
    handleClickOnElement($("#1"));
  });
  $("#2").click(function(){
    handleClickOnElement($("#2"));
  });
  $("#3").click(function(){
    handleClickOnElement($("#3"));
  });
  $("#4").click(function(){
    handleClickOnElement($("#4"));
  });
  $("#5").click(function(){
    handleClickOnElement($("#5"));
  });
  $("#6").click(function(){
    handleClickOnElement($("#6"));
  });
  $("#7").click(function(){
    handleClickOnElement($("#7"));
  });
  $("#8").click(function(){
    handleClickOnElement($("#8"));
  });


//this makes the submit name button a click function. and changes the input from the text box into the h2 header. it then hides text box and button after clicking submit.
  $("#submit1").click(function(){

     var player1 = $("#player1").val();

     $("#player1").hide();
     $("#player1header").text(player1);
     $("#submit1").hide();

   });

   $("#submit2").click(function(){

     var player2 = $("#player2").val();
     $("#player2").hide();
     $("#player2header").text(player2);
     $("#submit2").hide();

   });

   $("#like").click(function(){
   alert("Thanks!")
   });

//this button refreshes the entire page
   $("#reset").click(function(){
     location.reload(true);
  });

//when you click the Start new Game button, it resets the click count to 0, resets all index values in the original array to 0. Then it unbinds any unclicked buttons in the td boxes(gameboard). it then resets the board with the .html("") method. it enables the buttons to be clicked again with the handleClickOnElement function.
  $("#newGame").click(function(){

    clicks=0;
    array= [0,0,0,0,0,0,0,0,0];
    console.log(array);

    $("h1").text("Tic Tac Toe ✘o✘o✘o");

    $(".box").unbind('click');

    $("#0").html("").bind("click",function(){
      handleClickOnElement($("#0"));
    });
    $("#1").html("").bind("click",function(){
      handleClickOnElement($("#1"));
    });
    $("#2").html("").bind("click",function(){
      handleClickOnElement($("#2"));
    });
    $("#3").html("").bind("click",function(){
      handleClickOnElement($("#3"));
    });
    $("#4").html("").bind("click",function(){
      handleClickOnElement($("#4"));
    });
    $("#5").html("").bind("click",function(){
      handleClickOnElement($("#5"));
    });
    $("#6").html("").bind("click",function(){
      handleClickOnElement($("#6"));
    });
    $("#7").html("").bind("click",function(){
      handleClickOnElement($("#7"));
    });
    $("#8").html("").bind("click",function(){
      handleClickOnElement($("#8"));
    });
 });


 var audio = $("#lionRoar")[0];
    console.log(audio);
$("#submit1.play").click(function() {
    audio.play();
});

var audio = $("#lionRoar")[0];
   console.log(audio);
$("#submit2.play").click(function() {
   audio.play();
});

var audio = $("#lionRoar")[0];
   console.log(audio);
$("#newGame.play").click(function() {
   audio.play();
});

var audio = $("#lionRoar")[0];
   console.log(audio);
$("#reset.play").click(function() {
   audio.play();
});






});
