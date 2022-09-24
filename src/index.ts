type SortedArrayParams = DataSet | ObjectSortConfig;
type TypeArray<Type> = Type extends unknown ? Type[] : never;
export type DataObject = Record<string | number, unknown>;
export type DataItem = number | string | DataObject | Array<unknown>;
export type SortCallback = (a: DataItem, b: DataItem) => number;
export type DataSet = TypeArray<DataItem>;

interface ObjectSortConfig {
  sortCallback?: SortCallback;
  data?: DataSet;
}

class SortedArray {
  #data: DataSet;
  #sortCallback: SortCallback;
  #config: SortedArrayParams = {
    data: [],
    sortCallback: this.#fnSortDefault,
  };

  #fnSortDefault(a: DataItem, b: DataItem): number {
    const isEqual = a === b;

    return isEqual ? 0 : a > b ? 1 : -1;
  }

  #sort(): void {
    this.#data.sort(this.#sortCallback);
  }

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

  add(item: DataItem): void {
    const d: DataItem[] = this.#data;

    d.push(item);
    this.#sort();
  }

  edit(index: number, item: DataItem): void {
    this.#data[index] = item;
    this.#sort();
  }

  delete(index: number): void {
    this.#data.splice(index, 1);
  }

  get list(): DataSet {
    return this.#data;
  }
}

export default SortedArray;
