module.exports = {
  apps: [
    {
      name: "maamoura-hotel-app",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      instances: "max", // Runs Next.js in cluster mode to use all CPU cores
      exec_mode: "cluster",
      watch: false,
      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
};
