/** An immutable 2D floating-point offset.
*/
declare class _Offset {
    dx: number;
    dy: number;
    constructor(dx: number, dy: number);
    distance(): number;
    distanceSquared(): number;
    direction(): number;
    zero(): _Offset;
    scale(scaleX: number, scaleY: number): _Offset;
    translate(translateX: number, translateY: number): _Offset;
}
declare function Offset(dx?: number, dy?: number): _Offset;
export { Offset, _Offset };
