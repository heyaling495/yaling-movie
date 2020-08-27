module.exports={
  devServer:{
    proxy:{
      '/ajax':{
        target:'http://m.maoyan.com',
        changeOrigin:true,
        pathRequiresRewrite: {
          "^/ajax": "/ajax"
         }
      },
      '/api':{
        target:'http://192.168.43.22:8080/',
        changeOrigin:true,
        pathRequiresRewrite: {
          "^/api": "/api"
         }
      }
    }
  }
}