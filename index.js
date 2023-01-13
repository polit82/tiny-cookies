function set(key, value) {
	document.cookie = key+"="+encodeURIComponent(value);
}

function get(key) {
	const cookie = document.cookie.split('; ').find((cookie) => cookie.startsWith(key));
	return decodeURIComponent(cookie.substring(cookie.indexOf("=")+1));
}

module.exports = { set: set, get: get }
