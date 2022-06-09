function AddAttr(el, args) {
    el.style.removeProperty(args.value);
    el.style.setProperty(args.property, args.value);
    return el;
}
export { AddAttr };
//# sourceMappingURL=domHelper.js.map