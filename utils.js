export const getTime = timerDuration => {
  const minutes = Math.floor(timerDuration / 60);
  const seconds = timerDuration - minutes * 60;
  return `${minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
};
