[@afoot/sorted-array](../README.md) / [Exports](../modules.md) / default

# Class: default

Maintains a sorted array of data.

## Table of contents

### Constructors

- [constructor](default.md#constructor)

### Properties

- [#config](default.md##config)
- [#data](default.md##data)
- [#sortCallback](default.md##sortcallback)

### Accessors

- [list](default.md#list)

### Methods

- [#fnSortDefault](default.md##fnsortdefault)
- [#sort](default.md##sort)
- [add](default.md#add)
- [delete](default.md#delete)
- [edit](default.md#edit)

## Constructors

### constructor

• **new default**(`params?`)

Define initial data, sort algo, and perform initial sort.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `SortedArrayParams` | An intitial data array or a config object. |

#### Defined in

index.ts:49

## Properties

### #config

• `Private` **#config**: `SortedArrayParams`

#### Defined in

index.ts:19

___

### #data

• `Private` **#data**: [`DataSet`](../modules.md#dataset)

#### Defined in

index.ts:17

___

### #sortCallback

• `Private` **#sortCallback**: [`SortCallback`](../modules.md#sortcallback)

#### Defined in

index.ts:18

## Accessors

### list

• `get` **list**(): [`DataSet`](../modules.md#dataset)

#### Returns

[`DataSet`](../modules.md#dataset)

The sorted instance data.

#### Defined in

index.ts:101

## Methods

### #fnSortDefault

▸ `Private` **#fnSortDefault**(`a`, `b`): `number`

Default sorting algo. Straight comparison of values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`DataItem`](../modules.md#dataitem) | Comparator to sort against. |
| `b` | [`DataItem`](../modules.md#dataitem) | Comparator to sort against. |

#### Returns

`number`

One of [0.1,-1] to determine sort order.

#### Defined in

index.ts:31

___

### #sort

▸ `Private` **#sort**(): `void`

Runs sortCallback on the instance data.

#### Returns

`void`

#### Defined in

index.ts:40

___

### add

▸ **add**(`item`): `void`

Add a new element to the instance data.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | [`DataItem`](../modules.md#dataitem) | Input to append to the instance data. |

#### Returns

`void`

#### Defined in

index.ts:71

___

### delete

▸ **delete**(`index`): `void`

Delete an element from the data.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The index of the sorted data to pull. |

#### Returns

`void`

#### Defined in

index.ts:94

___

### edit

▸ **edit**(`index`, `item`): `void`

Modify an existing element in the instance data.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | Post-sort array index of the data to update. |
| `item` | [`DataItem`](../modules.md#dataitem) | The data to replace the instance entry at that index. |

#### Returns

`void`

#### Defined in

index.ts:84
