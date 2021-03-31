function scuberGreetingForFeet(someValue){
let message;
if (someValue < 400){
  message = "This one is on me!"
}

if (someValue > 400 && someValue < 2500){
  message = "I will gladly take your thirty bucks."
}

if (someValue > 2500){
  message = "No can do."
}
  // Write your code here!
  return message;
}
scuberGreetingForFeet(199)




function ternaryCheckCity(someCity){
  let message;

  someCity === "NYC"? (message = "Ok, sounds good.") : (message = "No go.");

  return message;

  // Write your code here!
}

function switchOnCharmFromTip(string){

  let message;


  switch(string) {
    case 'generous':
      message = 'Thank you so much.';
      break;
      
    case "not as generous":
      message = "Thank you.";

      break;
      default:
      message = "Bye.";
  }

  return message;

 
  
  // Write your code here!
}