## window-get

A utility for getting properties from the window object in projects that render on both the server and the client.

### Installation

```
npm install window-get
```

### Usage

```
import windowGet from 'window-get';

window.foo = {bar: 'baz'}
windowGet('foo.bar')
=> 'baz'
```

##### Works with arrays

```
window.foo = [{bar: 'baz'}]
windowGet('foo.0.bar')
=> 'baz'
```

##### Window doesn't exist (server side)

```
windowGet('foo.bar')
=> null

// With default
windowGet('foo.bar', 'qux')
=> 'qux'
```

