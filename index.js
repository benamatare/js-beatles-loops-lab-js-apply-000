/*
describe('Beatles Loops', function() {
  it("returns an array of strings containing what instruments each musician plays", function() {
    const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
    const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

    expect(theBeatlesPlay(musicians, instruments)).toEqual(["John Lennon plays Guitar", "Paul McCartney plays Bass Guitar", "George Harrison plays Lead Guitar", "Ringo Starr plays Drums"]);
  });
*/
// This says that this function looks at musicians and instruments (two arrays)
// and creates a new array 
// then it iterates through each array 
// then combines the indexes and the text plays
// into the new array as musicians[1] + "plays" instruments[1]
function theBeatlesPlay(musicians, instruments) {
  var combinedStuff = [];
  for (var i=0; i < musicians.length; i++) {
    combinedStuff.push(musicians[i] += " plays " + instruments[i]);
  }
  return combinedStuff;
}


function johnLennonFacts(facts) {
  newArr = [];
  var i = 0;
  
  while (i < facts.length) {
    newArr.push(facts[i] +"!!!");
    i++;
  }
  return newArr;
}