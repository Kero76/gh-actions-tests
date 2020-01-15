import { assert } from 'chai';
import 'mocha';
import MyClass1 from '../src/MyClass1';

const myClass1 = new MyClass1();

describe('MyClass1', () => {
    describe('getRandomBoolean', () => {
        it('Should returns a random boolean', () => {
            const result = myClass1.getRandomBoolean();

            assert.isBoolean(result);
        });
    });
});
