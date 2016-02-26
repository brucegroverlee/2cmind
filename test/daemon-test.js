var test = require('tape')
var daemon = require('.././src/backend/api/daemon/index.js')
//var tvmaze = require('../index.js')
//var daemon = require('src/backend/api/daemon')

test('should create a daemon', function (t) {
  t.ok(daemon, 'daemon should exist')
  t.ok(daemon.create, 'daemon.create should exist')
  t.equals(typeof daemon.create, 'function', 'daemon.create should be a function')
  t.end()
})