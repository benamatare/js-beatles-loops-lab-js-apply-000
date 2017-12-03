/*
describe('Beatles Loops', function() {
  it("returns an array of strings containing what instruments each musician plays", function() {
    const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
    const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

    expect(theBeatlesPlay(musicians, instruments)).toEqual(["John Lennon plays Guitar", "Paul McCartney plays Bass Guitar", "George Harrison plays Lead Guitar", "Ringo Starr plays Drums"]);
  });
*/

function theBeatlesPlay(musicians, instruments) {
  var combinedStuff = [];
  
  for (var i=0; i < musicians.length; i++) {
    combinedStuff.push(musicians[i] += " plays the " + instruments[i]);
  }
  return combinedStuff;
}
