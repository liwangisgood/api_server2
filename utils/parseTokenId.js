const jwt = require('jsonwebtoken');

exports.decodeJWT=function(req, res, next){
    // 从请求头部获取JWT令牌
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Authorization token missing' });
    }

    try {
        // 使用jsonwebtoken库解码JWT令牌
        const decodedToken = jwt.verify(token, 'itheima No1. ^_^');

        // 将ID添加到请求对象的"user"属性中
        req.user = { id: decodedToken.id };

        // 调用next函数以继续处理请求
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid authorization token' });
    }
}

