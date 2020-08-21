module.exports={
  devServer:{
    proxy:{
      '/ajax':{
        target:'http://m.maoyan.com',
        changeOrigin:true,
        pathRequiresRewrite: {
          "^/ajax": "/ajax"
         }
      }
    }
  }
}