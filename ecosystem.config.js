module.exports = {
  apps: [
    {
      name: 'micro-app',
      script: 'node_modules/.bin/micro',
      exec_mode: 'cluster',
      instances: 0
    }
  ]
}
