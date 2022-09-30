[@afoot/sorted-array](../index.md) / [Exports](../modules.md) / SortedArray

# Class: SortedArray

## Table of contents

### Constructors

- [constructor](SortedArray.md#constructor)

### Properties

- [#config](SortedArray.md##config)
- [#data](SortedArray.md##data)
- [#sortCallback](SortedArray.md##sortcallback)

### Accessors

- [log](SortedArray.md#log)

### Methods

- [#fnSortDefault](SortedArray.md##fnsortdefault)
- [#sort](SortedArray.md##sort)
- [add](SortedArray.md#add)
- [delete](SortedArray.md#delete)
- [edit](SortedArray.md#edit)

## Constructors

### constructor

• **new SortedArray**(`params?`)

Define initial data, sort algo, and perform initial sort.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`SortedArrayParams`](../modules.md#sortedarrayparams) | An intitial [data array](../modules.md#dataset) or a [config object](../interfaces/SortedArrayConfig.md). |

#### Defined in

index.ts:77

## Properties

### #config

• `Private` **#config**: [`SortedArrayParams`](../modules.md#sortedarrayparams)

Default settings.

#### Defined in

index.ts:43

___

### #data

• `Private` **#data**: [`DataSet`](../modules.md#dataset)

The instance state. The whole reason we’re here.

#### Defined in

index.ts:39

___

### #sortCallback

• `Private` **#sortCallback**: [`SortCallback`](../modules.md#sortcallback)

The sorting algorithm used in this instance.

#### Defined in

index.ts:41

## Accessors

### log

• `get` **log**(): [`DataSet`](../modules.md#dataset)

Getter to return the sorted data.

**`Example`**

```ts
const fruit = new SortedArray(['banana', 'pineapple', 'apple']);
fruit.log; //returns ['apple','banana','pineapple']
```

#### Returns

[`DataSet`](../modules.md#dataset)

The sorted instance data.

#### Defined in

index.ts:172

## Methods

### #fnSortDefault

▸ `Private` **#fnSortDefault**(`a`, `b`): `number`

Sorting algorithm.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`DataItem`](../modules.md#dataitem) | Comparator to sort against. |
| `b` | [`DataItem`](../modules.md#dataitem) | Comparator to sort against. |

#### Returns

`number`

One of `[0.1,-1]` to determine sort order.

#### Defined in

index.ts:55

___

### #sort

▸ `Private` **#sort**(): [`DataSet`](../modules.md#dataset)

Applies [SortCallback](../modules.md#sortcallback) on the instance data.

#### Returns

[`DataSet`](../modules.md#dataset)

Sorted Data [DataSet](../modules.md#dataset)

#### Defined in

index.ts:68

___

### add

▸ **add**(`item`): [`DataSet`](../modules.md#dataset)

Add a new element to [SortedArray.#data](../modules.md).

**`Example`**

```ts
const sortedArray = new SortedArray([5, 2]);
sortedArray.add(3); // returns [2,3,5]
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | [`DataItem`](../modules.md#dataitem) | Input to append to the instance data. |

#### Returns

[`DataSet`](../modules.md#dataset)

Sorted Array [DataSet](../modules.md#dataset)

#### Defined in

index.ts:108

___

### delete

▸ **delete**(`index`): [`DataSet`](../modules.md#dataset)

Delete an element from the instance data.

**`Remarks`**

This is a departure from the return value of `Array.prototype.splice()`, which returns an array of the _deleted_ elements. Here, we keep to the pattern and return the _new_ array.

**`Example`**

```ts
const fruit = new SortedArray(['banana', 'pineapple', 'cheese']);
fruit.delete(1); //returns ['banana','pineapple'];
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | **Sorted** index of the array to delete. |

#### Returns

[`DataSet`](../modules.md#dataset)

Sorted Array [DataSet](../modules.md#dataset)

#### Defined in

index.ts:154

___

### edit

▸ **edit**(`index`, `item`): [`DataSet`](../modules.md#dataset)

Modify an existing element in [SortedArray.#data](../modules.md).

**`Example`**

```ts
const fruit = new SortedArray(['apples','pizza','bananas']);
const output = fruit.edit(2, 'peaches'); // Index is the _sorted_ array index.
console.log(output); // returns ['apples','bananas','peaches']
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | **Sorted** index of the array to update. |
| `item` | [`DataItem`](../modules.md#dataitem) | The data to replace the instance entry at that index. |

#### Returns

[`DataSet`](../modules.md#dataset)

Sorted array of [DataItem](../modules.md#dataitem)

#### Defined in

index.ts:132
