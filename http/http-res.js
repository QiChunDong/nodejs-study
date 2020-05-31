let http = require('http')

let server = http.createServer()

server.on('request', function(req, res) {
    // res.write(req.url)
    // res.end()

    // 更加简单的响应方式 响应并关闭
    res.end(req.url
        
})

// 关于端口
// 浏览器默认的端口就是80 所以如果设置为80 访问时不需要加端口
server.listen(3000, function() {
    console.log('服务启动')
})