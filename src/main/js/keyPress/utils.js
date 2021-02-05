export function getCurrNextPrev(taxi) {
  /* Get Selected */
  const children = taxi.children;
  const max = children.length;
  const selected = taxi.querySelector(".is-selected");

  /* Indices */
  const current = [...children].indexOf(selected);
  const next = getNext(current, max);
  const prev = getPrev(current);
  return [current, next, prev];
}

export function getNext(current, max) {
  return current + 1 < max ? current + 1 : current;
}
export function getPrev(current) {
  return current - 1 > 0 ? current - 1 : 0;
}

export function cleanUp(taxi) {
  taxi
    .querySelectorAll(".is-selected")
    .forEach((i) => i.classList.toggle("is-selected"));
}
