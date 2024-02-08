function createHobbit(hobbitName, hobbitAge){
  hobbit = {
    name: hobbitName,
    age: hobbitAge,
    isAdult: false,
    isOld: false
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
  if (hobbit.age > 32) {
    hobbit.isAdult = true;
  }
  else if (hobbit.age > 100){
    hobbit.isOld = true
  }
  return hobbit;
}

module.exports = {
  createHobbit, 
  celebrateBirthday, 
  // getRing, 
  // meetPeople, 
  // findFriends
}