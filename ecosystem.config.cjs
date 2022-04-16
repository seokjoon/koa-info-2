module.exports = [
  {
    env: {
      NODE_ENV: 'production',
      PATH_PRODUCTION: 'koa-info-2',
    },
    exec_mode: 'cluster',
    instances: 1,
    name: 'koa-info-2',
    script: '/koa-info-2/src/index.js',
  },
  // {
  //   script: 'worker.js',
  //   name: 'worker'
  // },
]
