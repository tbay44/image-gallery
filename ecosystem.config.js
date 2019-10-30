module.exports = {
  apps: [{
    name: 'image-gallery',
    script: './server/index.js',
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-54-183-11-36.us-west-1.compute.amazonaws.com',
      key: '~/.ssh/tbay.pem',
      ref: 'origin/master',
      repo: 'git@github.com:tbay44/image-gallery',
      path: '/home/ubuntu/image-gallery',
      'post-deploy': 'npm install && npm run build-deploy && pm2 startOrRestart ecosystem.config.js',
    },
  },
};
