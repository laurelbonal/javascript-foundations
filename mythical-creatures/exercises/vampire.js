function createVampire(vampireName, vampirePet){
vampire = {
  name: vampireName,
  pet: vampirePet,
  thirsty: true, 
  ouncesDrank: 0
}
if(vampirePet === undefined){
    vampire.pet = "bat"
} 
return vampire
}

function encounterDeliciousVictim(){
  if (vampire.ouncesDrank >= 50){
    return "No thanks, I am too full."
  }
  else {
    return 'I WANT TO SUCK YOUR BLOOD!'
  }
}

function drink(vampire){
  if (vampire.ouncesDrank < 50){
    vampire.ouncesDrank += 10
  }
  if (vampire.ouncesDrank >= 50){
    vampire.thirsty = false
  }
  return vampire
}

function inquirePlace(locations,location){
  if (locations.includes(location)){
    return `Yes, I have spent some time in ${location}.`
  }
  else {
    return `No, I have never been to ${location}.`
  }
}

function findBatLovers(vampire){
  var batLovers = []
  for (var i = 0; i < vampire.length; i ++){
    if (vampire[i].pet === 'bat'){
      batLovers.push(vampire[i].name)
    }
  }
  return batLovers
}

module.exports = {
  createVampire, 
  drink, 
  findBatLovers, 
  encounterDeliciousVictim, 
  inquirePlace
}