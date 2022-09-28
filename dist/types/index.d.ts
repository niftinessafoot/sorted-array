declare type SortedArrayParams = DataSet | ObjectSortConfig;
declare type TypeArray<Type> = Type extends unknown ? Type[] : never;
export declare type DataObject = Record<string | number, unknown>;
export declare type DataItem = number | string | DataObject | Array<unknown>;
export declare type SortCallback = (a: DataItem, b: DataItem) => number;
export declare type DataSet = TypeArray<DataItem>;
interface ObjectSortConfig {
    sortCallback?: SortCallback;
    data?: DataSet;
}
declare class SortedArray {
    #private;
    constructor(params?: SortedArrayParams);
    addItem(item: DataItem): void;
    editItem(index: number, item: DataItem): void;
    removeItem(index: number): void;
    get list(): DataSet;
}
export default SortedArray;
//# sourceMappingURL=index.d.ts.map