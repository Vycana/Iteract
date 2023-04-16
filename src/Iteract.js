/**
 * The `Iteract` class is a data manipulation library that allows for filtering data more readable and straigh-forward
 * 
 * @param {Array[]} data - array
 * @return {Iteract} Iteract
 */
class Iteract {
    constructor(data = []) {
        //check if value is array?
        if (Array.isArray(data)) {
            this.data = data;
        } else if(typeof data === 'object') {
            this.data = [data];
        }else {
            throw new Error("Data must be array!");
        }
    }

    /**
     * returns all the data.
     * @returns The `all()` method is returning the `data` property of the object.
     */
    all() {
        return this.data;
    }

    /**
     * Filter data with given arguments
     * @param args - `args` is a rest parameter that allows the function to accept any number of arguments as
     * an array
     * 
     * @example
     *
     * ```js
     * where("key", "operator", "value");
     * ```
     * or
     * ```js
     * where("operator", "value");
     * ``` 
     * 
     * @param {Object[]} operator - 
     * Comparison operators such as `=`, `!=`, `>`, `>=`, `<`, `<=`, `like`, `not like`, `in`, `not in`.
     * @returns The `where` method is returning an filtered `Iteract` object.
     */
    where(...args) {
        return new WhereOperator(this.data, ...args).performWhere().toIteract();
    }

    /**
     * The function sorts an array of data either in ascending or descending order based on a specified
     * key.
     * @param [sortAscending=true] - A boolean parameter that determines whether the data should be
     * sorted in ascending order (true) or descending order (false).
     * @param [key] - The key parameter is a string that represents the property name of the object in
     * the data array that should be used for sorting. If this parameter is provided, the function will
     * sort the data array based on the values of that property. If not provided, the function will
     * sort the data array based on the values only.
     * @returns The `sort` method is returning a new `Iteract` object with the sorted data.
     */
    sort(sortAscending = true, key = "") {
        if(key && this.has(key)) {
            if(sortAscending) {
                return new Iteract(this.data.sort((a, b) => a[key] - b[key]));
            }
            return new Iteract(this.data.sort((a, b) => b[key] - a[key]));
        } else {
            // checking if data contain keys
            if(this.hasKeys()) {
                throw new Error("The data has keys, use parameter key instead.");
            }
            if(sortAscending) {
                return new Iteract(this.data.sort((a, b) => a - b));
            }
            return new Iteract(this.data.sort((a, b) => b - a));
        }
    }

    /**
     * The function checks if a given value exists as a key in an object.
     * @param value - The value to check if it exists as a key in the object.
     * @returns The `has` method is returning a boolean value indicating whether the given `value` is
     * present as a key in the object.
     */
    has(value) {
        if(this.length() < 1) return false;
        return Object.keys(...this.all()).includes(value);
    }

    /**
     * The function checks if an object has any keys.
     * @returns The `hasKeys()` function is returning a boolean value indicating whether the object
     * has any keys or not.
     */
    hasKeys() {
        return Object.keys(...this.all()).length > 0;
    }

    unique(key = "") {
        if(key && this.has(key)) {
            const result = new Iteract();
            this.data.forEach(item => {
                if(result.where(key, "=", item[key]).length() < 1) {
                    result.push(item);
                }
            });
            return result;
        }
        return new Iteract(Array.from(new Set(this.all())));
    }

    /**
     * The function adds a value to an array and returns a new instance of an object with the updated
     * array.
     * @param value - The value to be added to the end of the array.
     * @returns A new instance of the `Iteract` class with the updated array after pushing the `value`
     * parameter to it.
     */
    push(value) {
        this.all().push(value);
        return new Iteract(this.all());
    }

    /**
     * Removes and returns the last element of an array.
     * @returns The `pop()` method is returning the last element of the array
     */
    pop() {
        return this.all().pop();
    }

    /**
     * The function returns the length of an array.
     * @returns The `length()` function is returning the length of the array.
     */
    length() {
        return this.all().length;
    }

    /**
     * The function returns the first element of an array.
     * @returns The `first()` function is returning the first element of an array.
     */
    first() {
        return this.all()[0];
    }
    
    /**
     * The "last()" function returns the last element of an array.
     * @returns The `last()` function is returning the last element of an array-like object.
     */
    last() {
        return this.all()[this.length() - 1];
    }

    /**
     * The function fetches data from a given URL and returns a new Iteract object.
     * @param url - The URL from which data needs to be fetched asynchronously.
     * @returns A new instance of the `Iteract` class with the data fetched from the provided URL.
     */
    static async fromAsync(url) {
        const fetchingData = await fetch(url).then(res=> {
            if(!res.ok) throw new Error('Fetching data failed');
            return res.json();
        });
        return new Iteract(fetchingData);
        // return new Promise((resolve, reject) => {
        // });
    }

}

/* The WhereOperator class performs filtering operations on data based on specified conditions and
returns a new object with the filtered data. */
class WhereOperator {
    constructor(data, ...args) {
        this.data = data;
        if (args.length < 3) {
            this.operator = args[0];
            this.value = args[1];
        } else if(args.length == 3) {
            this.key = args[0];
            this.operator = args[1];
            this.value = args[2];
        } else {
            throw new Error("Argument must less than 4!");
        }
    }

    /**
     * The function returns a new instance of the Iteract class with the data passed as an argument.
     * @returns A new instance of the `Iteract` class with `this.data` as its argument is being
     * returned.
     */
    toIteract() {
        return new Iteract(this.data);
    }

    /**
     * The function performs filtering operations on data based on specified conditions and returns a
     * new object with the filtered data.
     * @returns A new instance of the WhereOperator class with the filtered data.
     */
    performWhere() {
        this.data = this.data.filter(item => {
            if (this.key) {
                switch (this.operator) {
                    case '=':
                        return item[this.key] == this.value;
                    case '!=':
                        return item[this.key] != this.value;
                    case '>':
                        return item[this.key] > this.value;
                    case '>=':
                        return item[this.key] >= this.value;
                    case '<':
                        return item[this.key] < this.value;
                    case '<=':
                        return item[this.key] <= this.value;
                    case 'like':
                        if(typeof this.value == "string" && typeof item[this.key] == "string") {
                            return item[this.key].indexOf(this.value) > -1;
                        }
                        throw new Error("The value must be type of string");
                    case 'not like':
                        if(typeof this.value == "string" && typeof item[this.key] == "string") {
                            return item[this.key].indexOf(this.value) < 0;
                        }
                        throw new Error("The value must be type of string");
                    case 'in':
                        if(this.value instanceof Array) {
                            return this.value.includes(item[this.key]);
                        }
                        throw new Error("The value must be type of array");
                    case 'not in':
                        if(this.value instanceof Array) {
                            return !this.value.includes(item[this.key]);
                        }
                        throw new Error("The value must be type of array");
                    default:
                        throw new Error(`The operator does not exist`);
                }
            } else {
                switch (this.operator) {
                    case '=':
                        return item == this.value;
                    case '!=':
                        return item != this.value;
                    case '>':
                        return item > this.value;
                    case '>=':
                        return item >= this.value;
                    case '<':
                        return item < this.value;
                    case '<=':
                        return item <= this.value;
                    case 'like':
                        if(typeof this.value == "string" && typeof item == "string") {
                            return item.indexOf(this.value) > -1;
                        }
                        throw new Error("The value must be type of string");
                    case 'not like':
                        if(typeof this.value == "string" && typeof item == "string") {
                            return item.indexOf(this.value) < 0;
                        }
                        throw new Error("The value must be type of string");
                    case 'in':
                        if(this.value instanceof Array) {
                            return this.value.includes(item);
                        }
                        throw new Error("The value must be type of array");
                    case 'not in':
                        if(this.value instanceof Array) {
                            return !this.value.includes(item);
                        }
                        throw new Error("The value must be type of array");
                    default:
                        throw new Error(`The operator does not exist`);
                }
            }
        });
        if(this.key) {
            return new WhereOperator(this.data, this.key, this.operator, this.value);
        }
        return new WhereOperator(this.data, this.operator, this.value);
    }
}
export default Iteract;