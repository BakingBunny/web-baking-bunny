export default function formatCurrency(number: number) {
  return '$' + Number(number).toFixed(2).toLocaleString() + '';
}
