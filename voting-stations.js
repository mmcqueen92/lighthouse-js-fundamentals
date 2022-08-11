const chooseStations = function (stations) {
  let output = [];
  for (const station of stations) {
    if (station[1] >= 20 && (station[2] === 'school' || station[2] === 'community centre')) {
      output.push(station[0]);
    }
  }
  return output;
}
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];
console.log(chooseStations(stations))
//In order for a station to be deemed appropriate, it must have a capacity of at least 20, and be a school or community centre.