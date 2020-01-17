/**
 * A class with few methods comments.
 *
 * @author Nicolas GILLE <nic.gille@gmail.com>
 * @since 0.1.0
 * @version 1.0
 * @license MIT
 */
export default class MyClass1 {
    /**
     * Empty constructor.
     *
     * @constructor
     */
    constructor() {}

    /**
     * Get a random boolean.
     *
     * @returns {boolean}
     *  A random boolean.
     *
     * @since 0.1.0
     * @version 1.0
     */
    getRandomBoolean(): boolean {
        return Math.random() >= 0.5;
    }

    /**
     * Say hello !
     *
     * @param name {string}
     *  The name of the person to say hello, or "world" if is empty.
     * @returns {string}
     *  Return "Hello [name|'World'];
     *
     * @since 0.2.0
     * @version 1.0
     */
    sayHello(name: string): string { return 'Hello ' + (name.length === 0) ? 'World' : name; }

    /**
     * Say goodbye !
     * 
     * @param name {string}
     *  The name of the person to say goodbye, or "world" if is empty.
     * @returns {string}
     *  Return Goodbye [name|'World']
     * 
     * @since 0.3.0
     * @version 1.0
     */
    SayGoodbye(name: string): string { return 'Goodbye ' + (name.length === 0) ? 'World' : name; }
}
