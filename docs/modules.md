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

index.ts:12

___

### DataObject

Ƭ **DataObject**: `Record`<`string` \| `number`, `unknown`\>

Any Object Literal. May convert `unknown` to `any`.

#### Defined in

index.ts:10

___

### DataSet

Ƭ **DataSet**: [`TypeArray`](modules.md#typearray)<[`DataItem`](modules.md#dataitem)\>

#### Defined in

index.ts:8

___

### SortCallback

Ƭ **SortCallback**: (`a`: [`DataItem`](modules.md#dataitem), `b`: [`DataItem`](modules.md#dataitem)) => `number`

#### Type declaration

▸ (`a`, `b`): `number`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`DataItem`](modules.md#dataitem) |
| `b` | [`DataItem`](modules.md#dataitem) |

##### Returns

`number`

#### Defined in

index.ts:13

___

### SortedArrayParams

Ƭ **SortedArrayParams**: [`DataSet`](modules.md#dataset) \| [`SortedArrayConfig`](interfaces/SortedArrayConfig.md)

#### Defined in

index.ts:1

___

### TypeArray

Ƭ **TypeArray**<`Type`\>: `Type` extends `unknown` ? `Type`[] : `never`

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Defined in

index.ts:7
