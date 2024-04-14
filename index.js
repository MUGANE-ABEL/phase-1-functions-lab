// Code your solution in this file!

function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    if (someValue >42) {
        return parseFloat (someValue - 42)
    } else{
       return parseFloat (42-someValue) 
    }
  }

  function distanceFromHqInFeet(someValue) {
  return (distanceFromHqInBlocks(someValue) * 264);
  // the return value of distanceFromHqInBlocks can then be used to calculate feet
}

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    if (start>destination) {
        return (start-destination)*264
    } else {
        return (destination-start)*264
    }
  }

    function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    
    if (((start-destination)*264)<=400) {
        return 0
    } else if ( ((start-destination)*264)> 400, ((start-destination)*264)<= 2000) {
        return (((start-destination)*264)-400)* 0.02
    } else if (((start-destination)*264)> 2000, ((start-destination)*264)<= 2500){
    return 25
    } else {
        return 'cannot travel that far'
    }
  }

