function AddAttr(
  el: HTMLElement,
  args: { property: string; value: string }
): HTMLElement {
  el.style.removeProperty(args.value);
  el.style.setProperty(args.property, args.value);
  return el;
}

export { AddAttr };
