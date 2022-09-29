export declare type SortedArrayParams = DataSet | SortedArrayConfig;
/**
 * Iterates over all iterations of {@link DataItem}, typing each to an array. TypeScript will not allow you to mix types _in_ the array.
 *
 * @packageDocumentation
 */
export declare type TypeArray<Type> = Type extends unknown ? Type[] : never;
export declare type DataSet = TypeArray<DataItem>;
/** Any Object Literal. May convert `unknown` to `any`. */
export declare type DataObject = Record<string | number, unknown>;
/** Base units of info that can be added to a sorted array. */
export declare type DataItem = number | string | DataObject | Array<unknown>;
/**
 * Sorting algorithm.
 * @param a - Comparator to sort against.
 * @param b - Comparator to sort against.
 * @returns One of `[0.1,-1]` to determine sort order.
 */
export declare type SortCallback = (a: DataItem, b: DataItem) => number;
export interface SortedArrayConfig {
    /** The override sort method.  */
    sortCallback?: SortCallback;
    /** Seeded data. */
    data?: DataSet;
}
/**
 * Maintains a sorted array of data.
 */
export declare class SortedArray {
    #private;
    /**
     * Define initial data, sort algo, and perform initial sort.
     *
     * @param params - An intitial {@link DataSet | data array} or a {@link SortedArrayConfig | config object}.
     */
    constructor(params?: SortedArrayParams);
    /**
     * Add a new element to the instance data.
     *
     * @param item - Input to append to the instance data.
     * @returns Sorted Array {@link DataSet}
     *
     * @example
     * ```ts
     * const sortedArray = new SortedArray([5, 2]);
     * sortedArray.add(3); // returns [2,3,5]
     * ```
     *
     * @public
     */
    add(item: DataItem): DataSet;
    /**
     * Modify an existing element in the instance data.
     *
     * @param index - **Sorted** index of the array to update.
     * @param item - The data to replace the instance entry at that index.
     * @returns Sorted array of {@link DataItem | DataItem}
     *
     * @example
     * ```ts
     * const fruit = new SortedArray(['apples','pizza','bananas']);
     * const output = fruit.edit(2, 'peaches'); // Index is the _sorted_ array index.
     * console.log(output); // returns ['apples','bananas','peaches']
     * ```
     *
     * @public
     */
    edit(index: number, item: DataItem): DataSet;
    /**
     * Delete an element from the instance data.
     *
     * @param index - **Sorted** index of the array to delete.
     * @returns Sorted Array {@link DataSet}
     *
     * @remarks
     * This is a departure from the return value of `Array.prototype.splice()`, which returns an array of the _deleted_ elements. Here, we keep to the pattern and return the _new_ array.
     *
     * @example
     * ```ts
     * const fruit = new SortedArray(['banana', 'pineapple', 'cheese']);
     * fruit.delete(1); //returns ['banana','pineapple'];
     * ```
     *
     * @public
     */
    delete(index: number): DataSet;
    /**
     * Getter to return the sorted data.
     *
     * @returns The sorted instance data.
     *
     * @example
     * ```ts
     * const fruit = new SortedArray(['banana', 'pineapple', 'apple']);
     * fruit.log; //returns ['apple','banana','pineapple']
     * ```
     *
     * @public
     */
    get log(): DataSet;
}
//# sourceMappingURL=index.d.ts.map