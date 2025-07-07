module.exports = {
  apps: [
    {
      name: 'web',
      script: 'npm',
      args: 'start',
      cwd: '/root/ezy-shop',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '1G',
      error_file: '/root/ezy-shop/logs/web-error.log',
      out_file: '/root/ezy-shop/logs/web-out.log',
      log_file: '/root/ezy-shop/logs/web-combined.log',
      time: true
    }
  ]
};
