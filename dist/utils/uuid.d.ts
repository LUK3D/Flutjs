export default class _Key {
    /**
     * Generates a uuid
     * @returns `string`
     */
    constructor();
    fromValue(val: string): string;
    uuidv4(): string;
    uid(): string;
}
declare function Key(): string;
export { _Key, Key };
