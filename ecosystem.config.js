module.exports = {
  apps: [
    {
      name: 'micro-app',
      script: 'node_modules/.bin/micro',
      args: 'server.js',
      node_args: '--harmony-async-await',
      exec_mode: 'cluster',
      instances: 4
    }
  ]
}
