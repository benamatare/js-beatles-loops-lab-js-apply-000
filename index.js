/*
describe('Beatles Loops', function() {
  it("returns an array of strings containing what instruments each musician plays", function() {
    const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
    const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

    expect(theBeatlesPlay(musicians, instruments)).toEqual(["John Lennon plays Guitar", "Paul McCartney plays Bass Guitar", "George Harrison plays Lead Guitar", "Ringo Starr plays Drums"]);
  });
*/

function theBeatlesPlay(musicians, instruments) {
  newArr = [];
  for (i=0;i<1;i++){
    newArr.push(musicians[i] + instruments[i])
  }
  return theBeatlesPlay();
}
