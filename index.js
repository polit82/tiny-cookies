function set (name, value, attrs) {
  document.cookie = name + '=' + encodeURIComponent(value) +
    (attrs
      ? (attrs.path ? ';path=' + attrs.path : '') +
      (attrs.domain ? ';domain=' + attrs.domain : '') +
      (attrs.maxAge ? ';max-age=' + attrs.maxAge : '') +
      (attrs.expires ? ';expires=' + attrs.expires : '') +
      (attrs.secure ? ';secure' : '') +
      (attrs.samesite ? ';samesite' : '')
      : '')
}

function get (name) {
  const cookie = document.cookie.split('; ').find((cookie) => cookie.startsWith(name))
  return cookie ? decodeURIComponent(cookie.substring(cookie.indexOf('=') + 1)) : null
}

function remove (name) {
  set(name, '', { maxAge: '0' })
}

module.exports = { set, get, remove }
