export function formatMillis(millis) {
  if (!millis) {
    return null;
  }
  const hours = Math.floor(millis / 3600 / 1000);

  if (hours > 0) {
    return new Date(millis).toISOString().slice(11, 19);
  } else {
    return new Date(millis).toISOString().slice(14, 19);
  }
}
