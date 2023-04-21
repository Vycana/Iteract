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
     * This is a function that returns the length of an array grouped by a callback function.
     * @param callback - The `callback` parameter is a function that will be called for each item in
     * the collection. It takes two arguments: the current item being iterated over, and the entire
     * collection. The function should return a value that will be used to group the items in the
     * collection.
     * @returns The `lengthBy` method returns an object that contains the count of each item in the
     * collection, grouped by the result of the callback function if provided.
     */
    lengthBy(callback) {
        let result = {};
        this.each(item => {
            const group = typeof callback === "function" ? callback(item, this.all()) : null;
            if(group) {
                if(!result[group]) {
                    result[group] = 0;
                }
                result[group]++;
            } else {
                if(!result[item]) {
                    result[item] = 0;
                }
                result[item]++;
            }
        });
        return result
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
     * The function "take" returns a specified number of elements from an array.
     * @param number - The number of items to be returned from the array. The `take` method returns a
     * new array containing the first `number` items from the original array.
     * @returns The `take` method is returning an array of elements from the beginning of the array.
     */
    take(number) {
        if (number > this.length()) throw new Error("Make sure parameter number is less than the length of data")
        return this.all().slice(0, number);
    }

    /**
     * The function converts data to a JSON string and throws an error if the data is not valid JSON.
     * @returns a JSON string representation of the object.
     */
    toJson() {
        try {
            return JSON.stringify(this.all());
        } catch (e) {
            throw new Error("Data is not valid JSON. Cannot use toJson function.");
        }
    }

    /**
     * The function joins the elements of an array into a string with optional separators.
     * @param [separator] - The separator parameter is a string that will be used to separate each
     * element in the array when they are joined together into a single string. If no separator is
     * provided, an empty string will be used as the default separator.
     * @param [lastElementSeparator] - lastElementSeparator is an optional parameter that specifies the
     * separator to be used for the last element in the array when joining the elements together into a
     * string. If this parameter is not provided, the separator parameter will be used for all elements
     * including the last one.
     * @returns a string that is the concatenation of all the elements in the array, separated by the
     * `separator` parameter. If the array has more than one element, the second to last element will
     * be separated by the `lastElementSeparator` parameter. If `lastElementSeparator` is not provided,
     * the `separator` parameter will be used instead. If the array has only one element
     */
    join(separator = "", lastElementSeparator = "") {
        if (Array.isArray(this.all())) {
            if (this.length() == 1) {
                return this.data[0] + "";
            }
            let joinedString = "";
            for (let i = 0; i < this.data.length; i += 1) {
                if (i == this.data.length - 2) {
                    if (lastElementSeparator) {
                        joinedString += this.data[i] + lastElementSeparator;
                    } else {
                        joinedString += this.data[i] + separator;
                    }
                } else if (i == this.data.length - 1) {
                    joinedString += this.data[i];
                } else {
                    joinedString += this.data[i] + separator;
                }
            }
            return joinedString;
        }
        throw new Error("join function cannot use in object");
    }

    /**
     * This function groups an array of objects by a specified key and returns a new Iteract object
     * with the grouped data.
     * @param key - The key parameter is the property name that will be used to group the elements of
     * the array. It should be a string representing the name of the property.
     * @returns a new instance of the Iteract class with the data grouped by the specified key.
     */
    groupBy(key) {
        let result = {};
        if (key) {

            if (!isFinite(key) && this.hasKeys() && this.has(key)) {
                for (let i = 0; i < this.length(); i += 1) {
                    const groupedKey = this.data[i][key];
                    if (result[groupedKey]) {
                        result[groupedKey].push(this.data[i]);
                    } else {
                        result[groupedKey] = [this.data[i]];
                    }
                }
                return new Iteract(result);
            } else {
                throw new Error("Parameter must be string not number or the key is not exist in this array.")
            }
        }
        throw new Error("Should pass the parameter with existing keys.");
    }

    /**
     * The function returns the minimum value of either a specific key in an array of objects or the
     * entire array if all values are numeric.
     * @param [key] - The key parameter is a string that represents the property name of the object in
     * the array. If the key parameter is not
     * provided or is an empty string, the function will attempt to find the minimum value of the
     * entire array.
     * @returns the minimum value of either the specified key in the array or the minimum value of all
     * numeric values in the array. If the data is not numeric or the specified key does not exist in
     * the array, an error is thrown.
     */
    min(key = "") {
        if (key && !isFinite(key) && this.hasKeys() && this.has(key)) {
            let bestMinValue = Infinity;
            for (let i = 0; i < this.length(); i++) {
                const value = this.data[i][key];
                bestMinValue = Math.min(bestMinValue, value);
            }
            return bestMinValue;
        }
        if (this.all().every(item => isFinite(item))) {
            return Math.min(...this.all());
        }
        throw new Error("Data must be numeric only or the key is not exist in this array.")
    }

    /**
     * The function returns the maximum value of either a specific key in an array of objects or the
     * maximum value of all numeric values in the array.
     * @param key - The key parameter is a string that represents the name of the property in the
     * objects contained in the array that should be used to determine the maximum value.
     * @returns the maximum value of either a specific key in the array or all the numeric values in
     * the array. If the data is not numeric or the key does not exist in the array, an error is
     * thrown.
     */
    max(key) {
        if (key && !isFinite(key) && this.hasKeys() && this.has(key)) {
            let bestMaxValue = -Infinity;
            for (let i = 0; i < this.length(); i++) {
                const value = this.data[i][key];
                bestMaxValue = Math.max(bestMaxValue, value);
            }
            return bestMaxValue;
        }
        if (this.all().every(item => isFinite(item))) {
            return Math.max(...this.all());
        }
        throw new Error("Data must be numeric only or the key is not exist in this array.")
    }

    /**
     * The function calculates the sum of either all numeric values in an array or a specific key's
     * numeric values in an array of objects.
     * @param key - The key parameter is a string representing the key of the property to be summed up
     * in the array.
     * @returns the sum of all the values in the array, or the sum of a specific key's values in the
     * array if the key exists and all values are numeric. If the data is not numeric or the key does
     * not exist in the array, an error is thrown.
     */
    sum(key) {
        if (key && !isFinite(key) && this.hasKeys() && this.has(key)) {
            return this.all().reduce((a, b) => {
                if(a[key]) {
                    return a[key] + b[key];
                }
                return a + b[key];
            });
        }
        if (this.all().every(item => isFinite(item))) {
            return this.all().reduce((a, b) => a + b);
        }
        throw new Error("Data must be numeric only or the key is not exist in this array.")
    }

    /**
     * This function calculates the average of either all numeric values in an array or the values of a
     * specific key in an array of objects.
     * @param key - The key parameter is an optional argument that specifies the key of the property to
     * calculate the average for. If provided, the method will calculate the average of the values of
     * that property for all objects in the array. If not provided, the method will calculate the
     * average of all values in the array.
     * @returns The `avg` function returns the average value of either the entire array or a specific
     * key in the array. If the data is not numeric or the key does not exist in the array, it throws
     * an error.
     */
    avg(key) {
        if (key && !isFinite(key) && this.hasKeys() && this.has(key)) {
            return this.sum(key) / this.length();
        }
        if (this.all().every(item => isFinite(item))) {
            return this.sum() / this.length();
        }
        throw new Error("Data must be numeric only or the key is not exist in this array.")
    }

    /**
     * The function returns an array of values from an object.
     * @returns A new instance of the `Iteract` class with an array of all the values of the objects in
     * the `data` array flattened into a single array.
     */
    values() {
        let result = [];
        for (let i = 0; i < this.length(); i+=1) {
            const item = this.data[i];
            result.push(Object.values(item));
        }
        return new Iteract(result.flat());
    }

    /**
     * The function returns an iterator of the keys of an object.
     * @returns A new Iteract object containing the keys of all the elements in the object.
     */
    keys() {
        return new Iteract(Object.keys(...this.all()));
    }

    /**
     * Checks if an array is empty and returns a boolean value.
     * @returns If the length is zero, it
     * will return `true`, indicating that the object is empty. If the length is greater than zero, it
     * will return `false`, indicating that the object is not empty.
     */
    isEmpty() {
        return this.length() == 0;
    }

    /**
     * The function checks if a data array is not empty.
     * @returns The `isNotEmpty()` function is returning a boolean value (`true` or `false`) based on
     * whether the length of the `data` array is greater than 0.
     */
    isNotEmpty() {
        return this.length() > 0;
    }

    /**
     * This function checks if any element in an array satisfies a given condition and returns true if
     * at least one element does.
     * @param callback - The callback parameter is a function that will be called for each element in
     * the array. It takes one argument, which is the current element being iterated over, and should
     * return a boolean value indicating whether the element satisfies a certain condition. The
     * contains() method will return true if the callback function returns true
     * @returns The `contains` method is returning a boolean value (`true` or `false`). It returns
     * `true` if the callback function passed as an argument returns `true` for at least one element in
     * the array, and `false` otherwise.
     */
    contains(callback) {
        for (let i = 0; i < this.length(); i++) {
            const element = this.data[i];
            if(callback(element)) {
                return true;
            }
        }
        return false;
    }

    /**
     * This is a method that iterates over each element in an array and executes a callback function on
     * each element.
     * @param callback - The "callback" parameter is a function that will be executed for each element
     * in the data array. It takes two arguments: the current element being iterated over and the
     * entire data array.
     */
    each(callback) {
        for (let i = 0; i < this.length(); i++) {
            const element = this.data[i];
            callback(element, this.all());
        }
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