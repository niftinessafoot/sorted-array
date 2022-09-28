[@afoot/sorted-array](index.md) / Exports

# @afoot/sorted-array

## Table of contents

### Classes

- [default](classes/default.md)

### Type Aliases

- [DataItem](modules.md#dataitem)
- [DataObject](modules.md#dataobject)
- [DataSet](modules.md#dataset)
- [SortCallback](modules.md#sortcallback)

## Type Aliases

### DataItem

Ƭ **DataItem**: `number` \| `string` \| [`DataObject`](modules.md#dataobject) \| `unknown`[]

#### Defined in

index.ts:4

___

### DataObject

Ƭ **DataObject**: `Record`<`string` \| `number`, `unknown`\>

#### Defined in

index.ts:3

___

### DataSet

Ƭ **DataSet**: `TypeArray`<[`DataItem`](modules.md#dataitem)\>

#### Defined in

index.ts:6

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

index.ts:5
