const windowGet = require('./index.js');

describe('when window exists', () => {
    beforeEach(() => {
        delete global.window.foo
    })

    test('gets nested values', () => {
        global.window.foo = {
            bar: 'baz' 
        }

        expect(windowGet('foo.bar')).toBe('baz');
    })

    test('gets nested values within arrays', () => {
        global.window.foo = {
            bar: [{salami: 'sandwich'}]
        }
        expect(windowGet('foo.bar.0.salami')).toBe('sandwich');
    })
});