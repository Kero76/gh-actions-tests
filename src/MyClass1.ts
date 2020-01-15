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
}
