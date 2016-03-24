var SDK = require('sdk')

var api = new SDK('https://api.left-pad.io', { read: {url: '/'} }, {})

module.exports = function(str, len, ch, callback) {
  var query = { qs: {str, len, ch} }
  var promise = api.read(query)

  if (callback) {
    future.then(callback)
  } else {
    return promise
  }
}
