import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const charactersCollection = new CharactersCollection('Xaabzjho');

charactersCollection.sort();
console.log(charactersCollection.data);

const numbersColleciton = new NumbersCollection([100, 3, -5, 0]);
numbersColleciton.sort();
console.log(numbersColleciton.data);

const linkedListCollection = new LinkedList();

linkedListCollection.add(80);
linkedListCollection.add(-80);
linkedListCollection.add(900);
linkedListCollection.add(0);
linkedListCollection.add(10);

linkedListCollection.sort();
linkedListCollection.print();
