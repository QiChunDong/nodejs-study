let http = require('http')

let server = http.createServer()

// 处理参数可以接受两个参数
// request 请求
// response 响应
server.on('request', function(request, response) {
    // 可以拿到url等请求参数
    console.log('客户端请求', request.url)

    // write相应内容
    response.write('response')
    // 结束响应
    response.end()
})

server.listen(3000, function() {
    console.log('服务成功启动了， 可以通过127.0.0.1:3000访问')
})
