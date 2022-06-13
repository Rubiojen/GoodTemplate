export const msToHMS = (millis: number) => {
  'worklet';
  // ms
  let msRemainder = ((millis % 1000) / 1000).toFixed(2).slice(1);
  let sec = Math.floor(millis / 1000);
  return `${sec}${msRemainder}`;
};

export const millisToSeconds = (millis: number) => {
  let ms = millis % 1000;
  let sec = Math.floor(millis / 1000);
  return Number(`${sec}${ms ? `${ms}` : ''}`).toFixed(2);
};
