module.exports = {
<<<<<<< HEAD
        css: {
            loaderOptions: {
                postcss: {
                    // 这是rem适配的配置  注意： remUnit在这里要根据lib-flexible的规则来配制，如果您的设计稿是750px的，用75就刚刚好。
                    plugins: [
                        require("postcss-px2rem")({
                            remUnit: 75
                        })
                    ]
                }
            }
        }
    }
=======
    css: {
        loaderOptions: {
          postcss: {
            // 这是rem适配的配置  注意： remUnit在这里要根据lib-flexible的规则来配制，如果您的设计稿是750px的，用75就刚刚好。
             plugins: [
              require("postcss-px2rem")({
                remUnit: 75
          })
        ]
      }
    }
  }
}
>>>>>>> 3a6123959040a801c71a06a0a81602ee890ca3b9
