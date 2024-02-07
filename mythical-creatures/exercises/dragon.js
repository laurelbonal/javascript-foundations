function createDragon(dragonName, dragonRider, dragonTemperment){
  dragon = {
    name: dragonName,
    rider: dragonRider,
    temperment: dragonTemperment,
    timesEaten: 0,
    hungry: true
  }
  return dragon
}


function greetRider(dragon){
  return `Hi, ${dragon.rider}!`
}

function eat(dragon){
  dragon.timesEaten += 1;
  if (dragon.timesEaten >= 3){
      dragon.hungry = false
  }
  return dragon
}

// empty var 
// for loop
// if statement

function findFireBreathers(allDragons){
  var fireBreathers = []
   for (i = 0; i < allDragons.length; i++){
     var dragon = allDragons[i]
      if (dragon.temperment === "aggressive"){
      fireBreathers.push(dragon)
    }
  }
  return fireBreathers
}



module.exports = {
  createDragon, 
  greetRider, 
  eat, 
  findFireBreathers
}