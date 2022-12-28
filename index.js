function distanceFromHqInBlocks(pickup){
    const office = 42;
    const blocks = Math.abs(office-pickup);
    return blocks;

    distanceFromHqInBlocks(43);
    distanceFromHqInBlocks(50);
    distanceFromHqInBlocks(34);
}

function distanceFromHqInFeet(blocks){
    const feet = (distanceFromHqInBlocks(blocks)* 264)
    return feet;

    console.log(distanceFromHqInFeet(1));
    console.log(distanceFromHqInFeet(8));
    console.log(distanceFromHqInFeet(8));
    }

function distanceTravelledInFeet(start,end){
    const feet = ((Math.abs(start - end)) * 264);
    return feet;
    
    console.log(distanceFromHqInFeet(43,48));
    console.log(distanceFromHqInFeet(50,60));
    console.log(distanceFromHqInFeet(34,28));
}

function calculatesFarePrice (start, end){
   
    let distance = (distanceTravelledInFeet(start,end)); 
    let price = 0;
    const setRate = 2500;
    
       if (distance <= 400){
          price = 0;
          return price;
          
       } else if (distance <= 2000){
          price = (distance - 400) * 0.02;
          return price;
           
       } else if (distance <= 2500){
          price = setRate/100;
          return price
          
       } else {
          return "cannot travel that far";
       }
    }
   console.log(calculatesFarePrice(34,32));
   console.log(calculatesFarePrice(50,58));
   console.log(calculatesFarePrice(34,24));
   