# tiny-cookies

Thin layer of abstraction over `document.cookie` that makes cookie handling easy.

```javascript
const cookies = require("tiny-cookies");
cookies.set("hello", "world", {maxAge: 3600});
console.log(cookies.get("hello"));
```

# Installation
```sh
npm i --save-dev tiny-cookies
```

# API

### set(name, value, attrs)
Set cookie named `name` to `value`, optionally specifying attributes with the `attrs` object.
```javascript
cookies.set("lang", "en", {
  path: "/",
  domain: "example.com",
  maxAge: 60*60*24*365,
  expires: "Fri, 20 Jan 2024 12:00:00 GMT"
  secure: true,
  samesite: true
});
```

### get(name)
Return the value of the cookie named `name`, or `null` if none exist.

### remove(name)
Delete the cookie named `name`.
```javascript
cookies.remove("lang");
```
