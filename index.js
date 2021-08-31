function scuberGreetingForFeet(distance){
  let result; 
  if (distance <= 400) {
  result = 'This one is on me!' 
  } else if (distance <= 2499) {
    result = 'I will gladly take your thirty bucks.'
  } else if (distance >= 2500) {
    result = 'No can do.'
  }
  return result
}

function ternaryCheckCity(city) {
  return (city == 'NYC' ? 'Ok, sounds good.' : 'No go.');
}

let charm = 'generous';

function switchOnCharmFromTip(tip) {
  switch(tip) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default :
    return 'Bye.';
    break;
  }
}
