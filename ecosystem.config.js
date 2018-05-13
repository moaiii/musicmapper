module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'musicmapper',
      'error_file'  : '/logs/musicmapper/error.log',
      'out_file'    : '/logs/musicmapper/out.log',
      'log_file'    : '/logs/musicmapper/combined.outerr.log',
      script    : 'server.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    },
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  'deploy' : {
    'dev' : {
      'user' : 'ec2-user',
      'host' : '34.253.191.192',
      'ref'  : 'origin/master',
      'repo' : 'git@github.com:moaiii/musicmapper.git',
      'path' : '/var/www/musicmapper',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'env'  : {
        'NODE_ENV' : 'staging',
        'DEBUG':'ambie-hub'
      }
    }
   }
};