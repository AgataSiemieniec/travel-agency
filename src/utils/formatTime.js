export const formatTime = (seconds) => {
  if (typeof seconds !== 'number' || seconds < 0) {
    return null;
  } else {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds / 60) % 60);
    let sec = Math.floor(seconds % 60);
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    sec = sec.toString().padStart(2, '0');

    return `${hours}:${minutes}:${sec}`;
  }
};
