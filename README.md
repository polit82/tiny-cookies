# tiny-cookies

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![code size](https://img.shields.io/github/languages/code-size/polit82/tiny-cookies)
![npm version](https://badge.fury.io/js/tiny-cookies.svg)
![vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/tiny-cookies)
![license](https://img.shields.io/github/license/polit82/tiny-cookies)

Thin layer of abstraction over `document.cookie` that makes cookie handling easy.

```javascript
const cookies = require("tiny-cookies");
cookies.set("hello", "world", {maxAge: 3600});
console.log(cookies.get("hello"));
```

## Features
- Small
- Fast
- No dependencies
- Compatible with all recent browsers versions
- Tested on Chrome, Chrome Android, Edge, Firefox, Firefox for Android, Safari and Opera

## Installation
Save it to your `devDependencies` for bundling:
```sh
npm i --save-dev tiny-cookies
```

## Usage

### - set(name, value, attrs)
Set cookie named `name` to `value`, optionally specifying attributes with the `attrs` object.
```javascript
cookies.set("lang", "en", {
  path: "/",
  domain: "example.com",
  maxAge: 60*60*24*365,
  expires: "Mon, 1 Jan 2024 12:00:00 GMT",
  secure: true,
  samesite: true
});
```

### - get(name)
Return the value of the cookie named `name`, or `null` if none exist.

### - remove(name)
Delete the cookie named `name`.
```javascript
cookies.remove("lang");
```

## License
MIT
