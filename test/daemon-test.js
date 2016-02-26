var test = require('tape')
var Daemon = require('.././src/backend/api/daemon/index.js')

var daemon = new Daemon()

test('should create a daemon', function (t) {
  t.ok(daemon, 'daemon should exist')
  t.ok(daemon.create, 'daemon.create should exist')
  t.equals(typeof daemon.create, 'function', 'daemon.create should be a function')
  t.equals(typeof daemon.key, 'number', 'daemon.key should be a variable')
  t.end()
})