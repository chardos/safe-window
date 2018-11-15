const safeWindow = require('./index.js');

beforeEach(() => {
    global.window = undefined
})

describe('when window does not exist', () => {
    test('and a default is passed, it returns the default value', () => {
        expect(
            safeWindow('foo.bar', 'camembert')
        ).toBe('camembert');
    })

    test('and no default is passed, it returns null', () => {
        expect(
            safeWindow('foo.bar')
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
        expect(safeWindow('foo.bar')).toBe('baz');
    })

    test('gets nested values within arrays', () => {
        global.window = {
            foo: {
                bar: [{salami: 'sandwich'}]
            }
        }
        expect(safeWindow('foo.bar.0.salami')).toBe('sandwich');
    })

    test('when path not found, returns the default', () => {
        global.window = {foo: 'bar'}

        expect(
            safeWindow('foo.bar')
        ).toBe(null)
    })
});
