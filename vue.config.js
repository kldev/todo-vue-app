module.exports = {
    lintOnSave: false,
    devServer: {
      port: 5005,
      proxy: {
        "/api": {
          target: "http://localhost:8080",
        },
        "/minio": {
            target: "http://localhost:9000",
          }
      } 
    }
  }