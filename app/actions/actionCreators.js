export function addTrack(date, track) {
  return {
    type: 'ADD_TRACK',
    date,
    track,
  };
}

export function removeTrack(date, index) {
  return {
    type: 'REMOVE_TRACK',
    date,
    index,
  };
}
