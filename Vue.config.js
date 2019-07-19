//正向代理
module.exports = {
    devServer:{
        proxy:{
            "SQ":{
                "target":"http://bookstoreapi.shuqireader.com",
                "changeOrigin":true,
                "pathRewrite":{
                    "^/SQ":"/"
                }
            },
            "SS":{
                "target":"http://read.xiaoshuo1-sm.com",
                "changeOrigin":true,
                "pathRewrite":{
                    "^/SS":"/"
                }
            }
        }
    }
}