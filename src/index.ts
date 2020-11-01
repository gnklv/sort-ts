import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

console.log('=================');

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log('NumberCollection:', numbersCollection.data);

console.log('=================');

const charsCollection = new CharactersCollection('XpJrHA');
charsCollection.sort();
console.log('CharactersCollection:', charsCollection.data);

console.log('=================');

const linkedList = new LinkedList();
linkedList.add(50).add(15).add(-10).add(0);
linkedList.sort();
console.log('LinkedList: ', linkedList.print());

console.log('=================');
