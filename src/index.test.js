const windowGet = require('./index.js');

beforeEach(() => {
    global.window = undefined
})

describe('when window does not exist', () => {
    test('and a default is passed, it returns the default value', () => {
        expect(
            windowGet('foo.bar', 'camembert')
        ).toBe('camembert');
    })

    test('and no default is passed, it returns null', () => {
        expect(
            windowGet('foo.bar')
        ).toBe(null);
    });
});

describe('when window exists', () => {
    test('gets nested values', () => {
        global.window = {
            foo: {
                bar: 'baz' 
            }
        }
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

    test('when path not found, returns the default', () => {
        global.window = {foo: 'bar'}

        expect(
            windowGet('foo.bar')
        ).toBe(null)
    })
});
