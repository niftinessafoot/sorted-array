type SortedArrayParams = DataSet | SortedArrayConfig;
type TypeArray<Type> = Type extends unknown ? Type[] : never;
export type DataObject = Record<string | number, unknown>;
export type DataItem = number | string | DataObject | Array<unknown>;
export type SortCallback = (a: DataItem, b: DataItem) => number;
export type DataSet = TypeArray<DataItem>;

interface SortedArrayConfig {
  sortCallback?: SortCallback;
  data?: DataSet;
}

/**
 * Maintains a sorted array of data.
 */
class SortedArray {
  #data: DataSet;
  #sortCallback: SortCallback;
  #config: SortedArrayParams = {
    data: [],
    sortCallback: this.#fnSortDefault,
  };

  /**
   * Default sorting algo. Straight comparison of values.
   *
   * @param a - Comparator to sort against.
   * @param b - Comparator to sort against.
   * @returns One of [0.1,-1] to determine sort order.
   */
  #fnSortDefault(a: DataItem, b: DataItem): number {
    const isEqual = a === b;

    return isEqual ? 0 : a > b ? 1 : -1;
  }

  /**
   * Runs sortCallback on the instance data.
   */
  #sort(): void {
    this.#data.sort(this.#sortCallback);
  }

  /**
   * Define initial data, sort algo, and perform initial sort.
   *
   * @param params - An intitial data array or a config object.
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
   * Add a new element to the instance data.
   *
   * @param item - Input to append to the instance data.
   */
  add(item: DataItem): void {
    const d: DataItem[] = this.#data;

    d.push(item);
    this.#sort();
  }

  /**
   * Modify an existing element in the instance data.
   *
   * @param index - Post-sort array index of the data to update.
   * @param item - The data to replace the instance entry at that index.
   */
  edit(index: number, item: DataItem): void {
    this.#data[index] = item;
    this.#sort();
  }

  /**
   * Delete an element from the data.
   *
   * @param index - The index of the sorted data to pull.
   */
  delete(index: number): void {
    this.#data.splice(index, 1);
  }

  /**
   * @returns The sorted instance data.
   */
  get list(): DataSet {
    return this.#data;
  }
}

export default SortedArray;
