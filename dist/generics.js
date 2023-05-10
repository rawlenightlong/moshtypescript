"use strict";
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new KeyValuePair("1", "a");
function wrapInArray(value) {
    return [value];
}
let nums = wrapInArray("1");
class ArrayUtils {
    wrapArray(value) {
        return [value];
    }
}
let utils = new ArrayUtils();
let nums2 = utils.wrapArray(1);
function echo(value) {
    return value;
}
echo("1");
function echo2(value) {
    return value;
}
echo2({ name: "Rawle" });
function echo3(value) {
    return value;
}
let rawle = { name: "Rawle" };
echo3(rawle);
class Becerril {
    constructor(name) {
        this.name = name;
    }
}
class DJ extends Becerril {
}
function echo4(value) {
    return value;
}
let dj = { name: "Dj" };
echo4(dj);
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    find(property, value) {
        return this._objects.find(obj => obj[property] === value);
    }
}
let store2 = new Store();
store2.add({ name: "a", price: 1 });
store2.find("name", "a");
store2.find("price", 1);
class CompressibleStore extends Store {
    compress() { }
}
let store = new CompressibleStore();
store.add;
store.compress;
class SearchableStore extends Store {
    find(name) {
        return this._objects.find(obj => obj.name === name);
    }
}
let product = {
    name: "a",
    price: 1
};
