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

    describe('sayHello', () => {
        it('Should returns Hello World', () => {
            const result = myClass1.sayHello();

            assert.strictEqual(result, "Hello World");
        });
        it('Should returns Hello Nick', () => {
            const result = myClass1.sayHello("Nick");

            assert.strictEqual(result, "Hello Nick");
        });
    });

    describe('sayGoodbye', () => {
        it('Should returns Goodbye World', () => {
            const result = myClass1.sayGoodbye();

            assert.strictEqual(result, "Goodbye World");
        });
        it('Should returns Goodbye Nick', () => {
            const result = myClass1.sayGoodbye("Nick");

            assert.strictEqual(result, "Goodbye Nick");
        });
    });
});
