export function getFormattedToPercent(stat, relatively) {
  return relatively ? Math.round(stat * 100) - 100 : Math.round(stat * 100);
}
