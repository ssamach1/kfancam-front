export function getFormattedForSearchString(string) {
  return string
    .toLowerCase()
    .replaceAll(` `, ``)
    .replaceAll(`.`, ``)
    .replaceAll(`[`, ``)
    .replaceAll(`]`, ``)
    .replaceAll(`-`, ``)
    .replaceAll(`#`, ``)
    .replaceAll(`_`, ``)
    .replaceAll(`’`, "")
    .replaceAll(`'`, "")
    .replaceAll(`&`, "")
    .replaceAll(`,`, "")
    .replaceAll(`?`, "");
}
