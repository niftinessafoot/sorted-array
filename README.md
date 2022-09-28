# Sorted Array

A configurable JavaScript module to maintain a sorted, private array.

## Configuration

_Sorted Array_ takes either an array of existing data or a config object.

### Array Example

```js
import SortedArray from '@afoot/sorted-array/';

const sortedArray = new SortedArray([5, 2, 3]);

console.log(sortedArray.list);
// returns [2,3,5]
```

### Config Object Example

```js
import SortedArray from '@afoot/sorted-array/';

const objects = [
  { name: 'banana', rank: 5 },
  { name: 'pineapple', rank: 2 },
  { name: 'apple', rank: 3 },
];

const callback = (a, b) => {
  a.rank > b.rank;
};

const sortedArray = new SortedArray({
  data: objects,
  sortCallback: callback,
});

console.log(sortedArray.list);
/*
 returns [
    { name: 'pineapple', rank: 2 },
    { name: 'apple', rank: 3 }
    { name: 'banana', rank: 5 },
  ]
*/
```

## Usage

### Add New Array Elements

```js
import SortedArray from '@afoot/sorted-array/';

const sortedArray = new SortedArray([5, 2]);

// Add new array elements
sortedArray.add(3);

console.log(sortedArray.list);
// returns [2,3,5]
```

### Edit Existing Array Elements

```js
import SortedArray from '@afoot/sorted-array/';

const sortedArray = new SortedArray(['banana', 'pineapple', 'cheese']);

console.log(sortedArray.list);
// returns ['banana','cheese','pineapple']

sortedArray.edit(1, 'apple');

console.log(sortedArray.list);
// returns ['apple','banana','pineapple']
```

### Remove Array Elements

```js
import SortedArray from '@afoot/sorted-array/';

const sortedArray = new SortedArray(['banana', 'pineapple', 'cheese']);

console.log(sortedArray.list);
// returns ['banana','cheese','pineapple']

sortedArray.delete(1);

console.log(sortedArray.list);
// returns ['banana','pineapple']
```

## credits

made with ❤️ and ☕️ by

![Niftiness Afoot!](https://gist.githubusercontent.com/niftinessafoot/2dba588395cb557293d5f09aebcd2ab0/raw/770293c76bead4f0986ff959f3ea8880017d92c0/bot.svg?sanitize=true) Matthew Smith [@niftinessafoot](https://github.com/niftinessafoot)
