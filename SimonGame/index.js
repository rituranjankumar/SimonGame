let gamePattern=[];
let userClickedPattern=[];
let buttonColors=["red","blue","green","yellow"];
let started=false;
let level=0;


   $(document).keypress(function(){
      if(started===false)
      {
         $("#level-title").text(`Level ${level}`);
         started=true;
         nextSequence();
         
      }
   });
      $(".btn").click(function() {

         var userChosenColour = $(this).attr("id");
         userClickedPattern.push(userChosenColour);
       
         playSound(userChosenColour);
         animatePress(userChosenColour);
       
         //2. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
         checkAnswer(userClickedPattern.length-1);
       });
      

      
       

   //1. Create a new function called checkAnswer(), it should take one input with the name currentLevel
function checkAnswer(currentLevel) {

   //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
   if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

     

     //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
     if (userClickedPattern.length === gamePattern.length){

       //5. Call nextSequence() after a 1000 millisecond delay.
       setTimeout(function () {
         nextSequence();
       }, 1000);

     }

   } else {

      let wrongAudio=new Audio("sounds/wrong.mp3");
         wrongAudio.play();

        $("body").addClass("game-over");
        
        setTimeout(()=>
         {
            $("body").removeClass("game-over");
         },200);

         $("h1").text("Game Over, Press Any Key to Restart");

         startOver();
   }

}

 
function nextSequence()
 {
   userClickedPattern = [];

   level++;
   $("#level-title").text(`Level ${level}`);
    let randomNumber=Math.floor(Math.random()*4);

    let randonChosenColor=buttonColors[randomNumber];
 gamePattern.push(randonChosenColor);

 let color = `#${randonChosenColor}`;
 $(color).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randonChosenColor);
 }


 let playSound=(name)=>{
   let audio1=new Audio(`sounds/${name}.mp3`);
audio1.play();
}

let animatePress=(currentColor)=>{

   $("#"+currentColor).addClass("pressed");

   setTimeout(()=>
      {
         $("#"+currentColor).removeClass("pressed");
      },100);
}

let startOver=()=>
{
   level =0;
    

   gamePattern=[];
   started=false;

}



