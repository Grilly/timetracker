export function addTrack(date, newTrack) {
  console.log(date, newTrack);
  return {
    type: 'ADD_TRACK',
    date,
    newTrack,
  };
}

export function removeTrack(date, index) {
  return {
    type: 'REMOVE_TRACK',
    date,
    index,
  };
}
