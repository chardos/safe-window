const windowGet = require('./index.js');

beforeEach(() => {
    global.window = undefined
})

describe('when window exists', () => {
    test('gets nested values', () => {
        global.window = {
            foo: {
                bar: 'baz' 
            }
        }
        console.log(window);

        expect(windowGet('foo.bar')).toBe('baz');
    })

    test('gets nested values within arrays', () => {
        global.window = {
            foo: {
                bar: [{salami: 'sandwich'}]
            }
        }
        expect(windowGet('foo.bar.0.salami')).toBe('sandwich');
    })
});

describe('when window does not exist', () => {
    test('and a default is passed, it returns the default value', () => {
        console.log(window);

        expect(
            windowGet('foo.bar', 'camembert')
        ).toBe('camembert');
    })

    test('and no default is passed, it returns null', () => {
        console.log(window);

        expect(
            windowGet('foo.bar')
        ).toBe(null);
    })
});
