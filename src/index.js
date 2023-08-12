import './module';
import './scss';

const one = { one: 1 };
const two = { two: 2 };
const oneTwo = { ...one, ...two };

console.log('Index', oneTwo);
