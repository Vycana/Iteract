[![Test](https://github.com/Vycana/Iteract/actions/workflows/publish.yml/badge.svg?style=plastic)](https://github.com/Vycana/Iteract/actions/workflows/publish.yml)
![GitHub](https://img.shields.io/github/license/Vycana/Iteract?style=plastic)
![GitHub Code Size in bytes](https://img.shields.io/github/languages/code-size/Vycana/Iteract?style=plastic)
![GitHub Last Commit](https://img.shields.io/github/last-commit/Vycana/Iteract?style=plastic)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/Vycana/Iteract?label=Release%20Date&style=plastic)

Iteract
=======

Iteract is a data manipulation library that allows for filtering data in a more readable and straightforward way. It provides an easy-to-use API for manipulating arrays of objects.

Installation
------------

You can install Iteract using npm:

```shell
npm install iteract

```
if you using this with browser env, better use this below.
```html
<script src="https://cdn.jsdelivr.net/gh/Vycana/Iteract@1.1.0/src/index.js" type="module"></script>
```

Usage
-----
Getting Started
-----
##### Node JS ENV
To use Iteract, simply import it and create a new instance with your data:

```js
const { Iteract } = require("iteract");

const data = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Mary", age: 25 },
  { id: 3, name: "Peter", age: 35 }
];

const iteract = new Iteract(data);

```

##### Browser ENV
To use iteract in browser env, just use `Iteract` and you are ready to go.
```js
<script>
        window.addEventListener("DOMContentLoaded", () => {
            console.log(Iteract);
        })
</script>
```
-----

### Filtering

Iteract provides a `where` method for filtering data. The `where` method takes one or more arguments that represent the conditions to filter by.

```js
const result = iteract.where("age", ">", 30);

```

This will return a new `Iteract` object containing only the objects where the age is greater than 30.

### Sorting

Iteract provides a `sort` method for sorting data. The `sort` method takes two optional arguments: `sortAscending` (a boolean that determines whether to sort in ascending or descending order) and `key` (the property to sort by).

```js
const result = iteract.sort(false, "age");

```

This will return a new `Iteract` object with the data sorted in descending order by age.

### Unique values

Iteract provides a `unique` method for filtering out duplicate values from an array. The `unique` method takes an optional `key` parameter that specifies the property to check for uniqueness.

```js
const result = iteract.unique("name");

```

This will return a new `Iteract` object with the duplicates removed based on the `name` property.

### Additional methods

Iteract also provides several other methods for manipulating arrays, such as `push`, `pop`, `length`, `first`, and `last`.

```js
const result = iteract.push({ id: 4, name: "Lucas", age: 28 });

```

This will return a new `Iteract` object with the new object added to the end of the array.

License
-------

Iteract is released under the MIT License.


