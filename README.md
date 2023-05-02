[![Test](https://github.com/Vycana/Iteract/actions/workflows/publish.yml/badge.svg?style=plastic)](https://github.com/Vycana/Iteract/actions/workflows/publish.yml)
![GitHub](https://img.shields.io/github/license/Vycana/Iteract?style=plastic)
![GitHub Code Size in bytes](https://img.shields.io/github/languages/code-size/Vycana/Iteract?style=plastic)
![GitHub Last Commit](https://img.shields.io/github/last-commit/Vycana/Iteract?style=plastic)
![GitHub Release Date - Published_At](https://img.shields.io/github/release-date/Vycana/Iteract?label=Release%20Date&style=plastic)

Iteract
=======

Iteract is a data manipulation library that allows for filtering data in a more readable and straightforward way. It provides an easy-to-use API for manipulating arrays of objects.

## Installation

Install the package using npm:

```bash
npm install @vycana/iteract
```
Usage
-----
Getting Started
-----
### Node JS ENV
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

### Browser ENV
To use iteract in browser env, just use `Iteract` and you are ready to go.
```js
<script>
        window.addEventListener("DOMContentLoaded", () => {
            console.log(Iteract);
        })
</script>
```
-----

## Usage

Require the package in your project:

```javascript
const { Iteract } = require('@vycana/iteract');
```

### Creating a new Iteract object

Create a new Iteract object by passing an array or an object to the constructor:

```javascript
const data = [1, 2, 3];
const iteract = new Iteract(data);
```

### all()

Use the `all()` method to get all the data stored in the object:

```javascript
const data = [1, 2, 3];
const iteract = new Iteract(data);
console.log(iteract.all()); // [1, 2, 3]
```

### where(...)

Use the `where(...)` method to filter the data based on certain conditions:

```javascript
const data = [
  { name: 'John', age: 25 },
  { name: 'Mary', age: 30 },
  { name: 'Peter', age: 35 },
];
const iteract = new Iteract(data);
console.log(iteract.where('age', '>=', 30).all()); // [{ name: 'Mary', age: 30 }, { name: 'Peter', age: 35 }]
```

### sort(...)

To use the sort method of the Iteract class, you can create a new instance of Iteract and pass an array or an object to it. Then, you can call the sort method on the Iteract instance, passing in the sortAscending parameter (which determines whether to sort the data in ascending or descending order) and the key parameter (which specifies the key to use for sorting if the data is an array of objects).

```javascript
const { Iteract } = require('iteract');

// Create a new instance of Iteract with an array of numbers
const arr = [4, 2, 1, 3];
const iteractArr = new Iteract(arr);

// Sort the array in ascending order
const sortedArr = iteractArr.sort(true);
console.log(sortedArr.all()); // [1, 2, 3, 4]

// Sort the array in descending order
const reverseSortedArr = iteractArr.sort(false);
console.log(reverseSortedArr.all()); // [4, 3, 2, 1]

// Create a new instance of Iteract with an array of objects
const objArr = [
	{ name: 'John', age: 25 },
	{ name: 'Mary', age: 30 },
	{ name: 'Peter', age: 20 },
];

const iteractObjArr = new Iteract(objArr);

// Sort the array of objects in ascending order based on the 'age' key
const sortedObjArr = iteractObjArr.sort(true, 'age');
console.log(sortedObjArr.all()); // [{ name: 'Peter', age: 20 }, { name: 'John', age: 25 }, { name: 'Mary', age: 30 }]

// Sort the array of objects in descending order based on the 'name' key
const reverseSortedObjArr = iteractObjArr.sort(false, 'name');
console.log(reverseSortedObjArr.all()); // [{ name: 'Peter', age: 20 }, { name: 'Mary', age: 30 }, { name: 'John', age: 25 }]
```

### has(value)

Use the `has(value)` method to check if a given value exists as a key in the object:

```javascript
const data = { name: 'John', age: 25 };
const iteract = new Iteract(data);
console.log(iteract.has('name')); // true
console.log(iteract.has('email')); // false
```

### hasKeys()

Use the `hasKeys()` method to check if the object has any keys:

```javascript
const data = { name: 'John', age: 25 };
const iteract = new Iteract(data);
console.log(iteract.hasKeys()); // true
```

### unique(key)

Use the `unique(key)` method to return an object with unique elements based on a specified key:

```javascript
const data = [
  { name: 'John', age: 25 },
  { name: 'Mary', age: 30 },
  { name: 'John', age: 35 },
];
const iteract = new Iteract(data);
console.log(iteract.unique('name').all()); // [{ name: 'John', age: 25 }, { name: 'Mary', age: 30 }]
```

### push(value)

Use the `push(value)` method to add a value to the data array and return a new Iteract object:

```javascript
const data = [1, 2, 3];
const iteract = new Iteract(data);
console.log(iteract.push(4).all()); // [1, 2, 3, 4]
```

Contributors
---

- dysentry30 - Author - [Github Profile](https://github.com/dysentry30)

License
-------

Iteract is released under the Vycana's MIT License.


