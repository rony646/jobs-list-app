export function replaceWithBr(text: string | undefined) {
  return text ? text.replace(/\n/g, "<br />") : "";
}
