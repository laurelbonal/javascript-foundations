function createHobbit(hobbitName, hobbitAge){
  hobbit = {
    name: hobbitName,
    age: hobbitAge,
    isAdult: false,
    isOld: false,
    acquaintances: []
  }
  if (hobbitAge === undefined){
    hobbit.age = 0
  }
  if (hobbitName === undefined){
    hobbit.name = "unknown"
  }
  return hobbit
}

function celebrateBirthday(hobbit) {
  hobbit.age += 1;
    if (hobbit.age > 100) {
      hobbit.isAdult = false;
      hobbit.isOld = true
    }
    else if (hobbit.age > 32){
      hobbit.isOld = false;
      hobbit.isAdult = true
    } 
  return hobbit;
}


function getRing(hobbit){
  if (hobbit.name === "Frodo"){
    return "Here is the ring!"
  } else {
    return "You can't have it!"
  }
}


module.exports = {
  createHobbit, 
  celebrateBirthday, 
  getRing, 
  meetPeople, 
  // findFriends
}