const test = require('ava')
const micro = require('micro')
const listen = require('test-listen')
const got = require('got')
const service = require('.')

test(async t => {
  const url = await listen(micro(service))
  const { body } = await got(url)

  t.deepEqual(body, '▲')
})
