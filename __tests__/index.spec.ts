import { SortedArray } from '../src/index';
import type { DataObject, DataSet, SortCallback } from '../src/index';

describe('Sorted Array:', () => {
  let data: DataSet;
  let expectedOutput: DataSet;

  beforeEach(() => {
    data = [12, 3, 19];
    expectedOutput = [3, 12, 19];
  });

  describe('Basic Setup:', () => {
    it('should return a class instance', () => {
      const instance = new SortedArray();
      expect(typeof instance).toEqual('object');
    });

    describe('Param: Array', () => {
      it('should return a sorted array with provided data', () => {
        const { log } = new SortedArray(data);

        expect(log).toEqual(expectedOutput);
      });
    });

    describe('Param: Config Object:', () => {
      it('should return a sorted array with provided data', () => {
        const output = new SortedArray({ data });

        expect(output.log).toEqual(expectedOutput);
      });

      it('should return a differently-sorted array when specifying a callback', () => {
        data = [
          { name: 'Onion', num: 12 },
          { name: 'Pepper', num: 3, current: true },
          { name: 'Celery', num: 19 },
        ];
        const sortCallback = (
          a: { name: string },
          b: { name: string }
        ): number => {
          let output;

          if (a === b) {
            output = 0;
          } else {
            output = a.name > b.name ? 1 : -1;
          }

          return output;
        };
        const output = new SortedArray({
          data,
          sortCallback: sortCallback as SortCallback,
        });
        const { name } = output.log[0] as DataObject;

        expect(name).toEqual('Celery');
      });

      it('should return unsorted data if callback is not a function', () => {
        const sortCallback: unknown = 'not a function';
        const obj = new SortedArray({
          data,
          sortCallback: sortCallback as SortCallback,
        });

        expect(obj.log).toEqual(data);
      });
    });

    describe('Param: Unsupported:', () => {
      it('should return an empty array when fed invalid data', () => {
        const str: unknown = 'BadString';
        const obj = new SortedArray(str as []);
        const output = obj.log;

        expect(output).toEqual([]);
      });
    });
  });

  describe('Sorting', () => {
    it('should return a sorted array', () => {
      const { log } = new SortedArray(data);

      expect(log).toEqual(expectedOutput);
    });

    it('should return items in the same order if equality', () => {
      data = [1, 2, 1];
      expectedOutput = [1, 1, 2];
      const { log } = new SortedArray(data);

      expect(log).toEqual(expectedOutput);
    });
  });

  describe('Data Getter:', () => {
    it('should return sorted data', () => {
      const arr = new SortedArray(data);
      const output = arr.log;

      expect(output).toEqual(expectedOutput);
    });
  });

  describe('Add Items', () => {
    const addedItem = 4;

    it('should append into empty array', () => {
      const obj = new SortedArray();
      obj.add(addedItem);

      expect(obj.log).toEqual([addedItem]);
    });

    it('should append to existing data', () => {
      const obj = new SortedArray(data);
      const output = obj.add(addedItem);

      expect(output).toHaveLength(4);
      expect(output[1]).toEqual(addedItem);
    });
  });

  describe('Remove Items', () => {
    it('should remove specified index', () => {
      expectedOutput = [3, 19];
      const obj = new SortedArray(data);
      const output = obj.delete(1);

      expect(output).toEqual(expectedOutput);
    });
  });

  describe('Edit Items', () => {
    it('should edit and re-sort existing data', () => {
      expectedOutput = [3, 19, 24];
      const newItem = 24;
      const obj = new SortedArray(data);

      const output = obj.edit(1, newItem);

      expect(output).toEqual(expectedOutput);
    });
  });
});
