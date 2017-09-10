module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'musicmapper',
      "error_file"  : "/logs/musicmapper/error.log",
      "out_file"    : "/logs/musicmapper/out.log",
      "log_file"    : "/logs/musicmapper/combined.outerr.log",
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
  deploy : {
    production : {
      key  : '/Users/christophermelville/.ssh/moai-dev.pem', 
      user : 'node',
      host : '34.253.191.192',
      ref  : 'origin/master',
      repo : 'git@github.com:moaiii/musicmapper.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
   }
};
