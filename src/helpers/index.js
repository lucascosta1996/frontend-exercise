export function getDateTime(time) {
  const formattedTime = new Date(time)
    .toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    .replace(' ', '');
  
    return formattedTime;
}

export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
