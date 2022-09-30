# sorted array

A configurable JavaScript module to maintain a sorted, private array.

## installation

_Sorted Array_ can be used as an [https://www.npmjs.com/package/@afoot/sorted-array](npm package) or download the package and use it as an ESM module right in the browser.

## documentation

View full documentation and examples at [https://niftinessafoot.github.io/sorted-array/](https://niftinessafoot.github.io/sorted-array/)

## example

_Sorted Array_ takes either an array of existing data or a config object.

```js
import SortedArray from '@afoot/sorted-array/';

const sortedArray = new SortedArray([5, 2, 3]);

sortedArray.log; // returns [2,3,5]
```

You can `add`, `edit`, and `delete` from the instance.

```js
import SortedArray from '@afoot/sorted-array/';

const sortedArray = new SortedArray([5, 2, 3]);
sortedArray.add('1');

sortedArray.log; // returns [1,2,3,5]
```

## license

[MIT](./LICENSE) © [Matthew Smith](http://www.niftinessafoot.com)

## made with ❤️ and ☕️ by

![Niftiness Afoot!](https://gist.githubusercontent.com/niftinessafoot/2dba588395cb557293d5f09aebcd2ab0/raw/770293c76bead4f0986ff959f3ea8880017d92c0/bot.svg?sanitize=true) [Matthew Smith](https://github.com/niftinessafoot)
