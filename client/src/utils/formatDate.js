export function formatDate(date) {
  const today = new Date(parseInt(date.toString()));
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  return `${month}/${today.getDay()}/${year}`;
}