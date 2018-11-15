# safe-window

[![npm version](https://img.shields.io/npm/v/safe-window.svg?style=flat)](https://www.npmjs.com/package/safe-window)

A utility for safely getting properties from the window object in projects that render on both the server and the client.

### Installation

```
npm i -S safe-window
```

### Usage

```
import safeWindow from 'safe-window';

window.foo = {bar: 'baz'}
safeWindow('foo.bar')
=> 'baz'
```

##### Works with arrays

```
window.foo = [{bar: 'baz'}]
safeWindow('foo.0.bar')
=> 'baz'
```

##### Window doesn't exist (server side)

```
safeWindow('foo.bar')
=> null

// With default
safeWindow('foo.bar', 'qux')
=> 'qux'
```

