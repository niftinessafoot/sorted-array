[@afoot/sorted-array](index.md) / Exports

# @afoot/sorted-array

## Table of contents

### Classes

- [SortedArray](classes/SortedArray.md)

### Interfaces

- [SortedArrayConfig](interfaces/SortedArrayConfig.md)

### Type Aliases

- [DataItem](modules.md#dataitem)
- [DataObject](modules.md#dataobject)
- [DataSet](modules.md#dataset)
- [SortCallback](modules.md#sortcallback)
- [SortedArrayParams](modules.md#sortedarrayparams)
- [TypeArray](modules.md#typearray)

## Type Aliases

### DataItem

Ƭ **DataItem**: `number` \| `string` \| [`DataObject`](modules.md#dataobject) \| `unknown`[]

Base units of info that can be added to a sorted array.

#### Defined in

index.ts:13

___

### DataObject

Ƭ **DataObject**: `Record`<`string` \| `number`, `any`\>

Any Object Literal.

#### Defined in

index.ts:11

___

### DataSet

Ƭ **DataSet**: [`TypeArray`](modules.md#typearray)<[`DataItem`](modules.md#dataitem)\>

The module payload.

#### Defined in

index.ts:8

___

### SortCallback

Ƭ **SortCallback**: (`a`: [`DataItem`](modules.md#dataitem), `b`: [`DataItem`](modules.md#dataitem)) => `number`

#### Type declaration

▸ (`a`, `b`): `number`

Sorting algorithm.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`DataItem`](modules.md#dataitem) | Comparator to sort against. |
| `b` | [`DataItem`](modules.md#dataitem) | Comparator to sort against. |

##### Returns

`number`

One of `[0,1,-1]` to determine sort order.

#### Defined in

index.ts:20

___

### SortedArrayParams

Ƭ **SortedArrayParams**: [`DataSet`](modules.md#dataset) \| [`SortedArrayConfig`](interfaces/SortedArrayConfig.md)

Params passed into new instane.

#### Defined in

index.ts:22

___

### TypeArray

Ƭ **TypeArray**<`Type`\>: `Type` extends `unknown` ? `Type`[] : `never`

Generates [DataSet](modules.md#dataset) by iterating over union types of [DataItem](modules.md#dataitem), applying array type to each.

TypeScript will not allow you to mix types _in_ the array.

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Defined in

index.ts:6
