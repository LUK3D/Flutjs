declare class _Image {
    constructor(args: {
        url?: string;
    });
    fromGradient(): void;
}
declare function Image(args: {
    url?: string;
}): _Image;
export { Image, _Image };
