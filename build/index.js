"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
var charactersCollection = new CharactersCollection_1.CharactersCollection('Xaabzjho');
charactersCollection.sort();
console.log(charactersCollection.data);
var numbersColleciton = new NumbersCollection_1.NumbersCollection([100, 3, -5, 0]);
numbersColleciton.sort();
console.log(numbersColleciton.data);
var linkedListCollection = new LinkedList_1.LinkedList();
linkedListCollection.add(80);
linkedListCollection.add(-80);
linkedListCollection.add(900);
linkedListCollection.add(0);
linkedListCollection.add(10);
linkedListCollection.sort();
linkedListCollection.print();
