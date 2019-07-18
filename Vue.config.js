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
            }
        }
    }
}