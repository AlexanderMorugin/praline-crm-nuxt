export function useDate() {
  let today = new Date();
  let date =
    today.getDate() +
    "." +
    (today.getMonth() + 1) +
    "." +
    today.getFullYear() +
    " " +
    today.getHours() +
    ":" +
    today.getMinutes();

  return { date };
}
