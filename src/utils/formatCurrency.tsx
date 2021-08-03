export default function formatCurrency(number: number): string {
  return '$' + Number(number).toFixed(2).toLocaleString() + '';
}
