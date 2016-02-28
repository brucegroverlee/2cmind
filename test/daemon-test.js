var test = require('tape')
var Daemon = require('.././src/backend/api/daemon/index.js')
var Brain = require('.././src/backend/api/daemon/brain/brain.js')

var daemon = new Daemon()
var brain = new Brain()

test('should create a daemon', function (t) {
  t.ok(daemon, 'daemon should exist')
  t.ok(daemon.create, 'daemon.create should exist')
  t.equals(typeof daemon.create, 'function', 'daemon.create should be a function')
  t.equals(typeof daemon.key, 'number', 'daemon.key should be a variable')
  t.end()
})

test('should create a Brain', function (t) {
  t.ok(brain, 'Brain should exist')
  t.ok(daemon.brain, 'Brain should exist in daemon')
  t.ok(daemon.brain.occipitalLobe, 'occipitalLobe should exist in daemon.brain')
  t.equals(typeof daemon.brain.dopamine, 'number', 'daemon.brain.dopamine should exist and be a number')
  t.end()
})