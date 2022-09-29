declare type SortedArrayParams = DataSet | SortedArrayConfig;
declare type TypeArray<Type> = Type extends unknown ? Type[] : never;
export declare type DataObject = Record<string | number, unknown>;
export declare type DataItem = number | string | DataObject | Array<unknown>;
export declare type SortCallback = (a: DataItem, b: DataItem) => number;
export declare type DataSet = TypeArray<DataItem>;
interface SortedArrayConfig {
    sortCallback?: SortCallback;
    data?: DataSet;
}
declare class SortedArray {
    #private;
    /**
     * Define initial data, sort algo, and perform initial sort.
     *
     * @param params - An intitial data array or a config object.
     */
    constructor(params?: SortedArrayParams);
    /**
     * Add a new element to the instance data.
     *
     * @param item - Input to append to the instance data.
     */
    add(item: DataItem): void;
    /**
     * Modify an existing element in the instance data.
     *
     * @param index - Post-sort array index of the data to update.
     * @param item - The data to replace the instance entry at that index.
     */
    edit(index: number, item: DataItem): void;
    delete(index: number): void;
    /**
     * @returns The sorted instance data.
     */
    get list(): DataSet;
}
export default SortedArray;
//# sourceMappingURL=index.d.ts.map