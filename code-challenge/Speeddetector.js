//solution 
//
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerDemerit = 5;
  
    if (speed <= speedLimit) {
      return "Ok";
    } else {
      const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemerit);
      if (demeritPoints >= 12) {
        return "License suspended";
      } else {
        return `Points: ${demeritPoints}`;
      }
    }
  }
  //allows the user to enter their speed reached 
  const userSpeed = prompt("Enter the car's speed attained:");
  const speed = parseInt(userSpeed);
  //does not allow other data types other than numbers
  if (isNaN(speed)) {
    result=prompt("Invalid input. Please enter a number.");
  } else {
    const result = checkSpeed(speed);
    document.write(result);
  }
  



