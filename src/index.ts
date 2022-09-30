export type SortedArrayParams = DataSet | SortedArrayConfig;
/**
 * Generates {@link DataSet} by iterating over union types of {@link DataItem}, applying array type to each.
 *
 * TypeScript will not allow you to mix types _in_ the array.
 */
export type TypeArray<Type> = Type extends unknown ? Type[] : never;
export type DataSet = TypeArray<DataItem>;
/** Any Object Literal. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DataObject = Record<string | number, any>;
/** Base units of info that can be added to a sorted array. */
export type DataItem = number | string | DataObject | Array<unknown>;
/**
 * Sorting algorithm.
 * @param a - Comparator to sort against.
 * @param b - Comparator to sort against.
 * @returns One of `[0,1,-1]` to determine sort order.
 */
export type SortCallback = (a: DataItem, b: DataItem) => number;

export interface SortedArrayConfig {
  /** Sort method. Overrides {@link SortedArray.#fnSortDefault}  */
  sortCallback?: SortCallback;
  /** Initialized data */
  data?: DataSet;
}

/**
 * Maintains a sorted array of data.
 *
 * @packageDocumentation
 */
export class SortedArray {
  // TODO: Add reset/replace functionality.
  // TODO: Add sort algo setter/replacer.

  /** The instance state. The whole reason we’re here.*/
  #data: DataSet;
  /** The sorting algorithm used in this instance. */
  #sortCallback: SortCallback;
  /** Default settings. */
  #config: SortedArrayParams = {
    data: [],
    /** @defaultValue Base algo if one isn’t provided. */
    sortCallback: this.#fnSortDefault,
  };

  /**
   * Sorting algorithm.
   * @param a - Comparator to sort against.
   * @param b - Comparator to sort against.
   * @returns One of `[0.1,-1]` to determine sort order.
   */
  #fnSortDefault(a: DataItem, b: DataItem): number {
    // TODO: Throw a warning if comparing non-primary objects.
    const isEqual = a === b;

    return isEqual ? 0 : a > b ? 1 : -1;
  }

  /**
   * Applies {@link SortCallback} on the instance data.
   *
   * @returns Sorted Data {@link DataSet}
   * @internal
   */
  #sort(): DataSet {
    return this.#data.sort(this.#sortCallback);
  }

  /**
   * Define initial data, sort algo, and perform initial sort.
   *
   * @param params - An intitial {@link DataSet | data array} or a {@link SortedArrayConfig | config object}.
   */
  constructor(params: SortedArrayParams = {}) {
    if (Array.isArray(params)) {
      params = { data: params };
    }

    const { data, sortCallback } = { ...this.#config, ...params };
    const isFunction = typeof sortCallback === 'function';

    this.#data = data;

    this.#sortCallback = isFunction ? sortCallback : this.#fnSortDefault;

    if (this.#data.length) {
      this.#sort();
    }
  }

  /**
   * Add a new element to {@link SortedArray.#data}.
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
  add(item: DataItem): DataSet {
    //TODO: Accept a single element or an array of elements.
    const d: DataItem[] = this.#data;

    d.push(item);
    return this.#sort();
  }

  /**
   * Modify an existing element in {@link SortedArray.#data}.
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
  edit(index: number, item: DataItem): DataSet {
    this.#data[index] = item;
    return this.#sort();
  }

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
  delete(index: number): DataSet {
    this.#data.splice(index, 1);
    return this.log;
  }

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
  get log(): DataSet {
    return this.#data;
  }
}
