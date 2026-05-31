export function formatPercent(value: number) {
  return new Intl.NumberFormat("en", {
    maximumFractionDigits: 1,
    style: "percent"
  }).format(value);
}
