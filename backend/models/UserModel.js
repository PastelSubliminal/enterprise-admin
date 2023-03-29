const mongoose = require('mongoose')
const Schema = mongoose.Schema

// user 模型 ===> users 集合（表）
const UserType = {
    username: String,
    password: String,
    gender: Number, // 0, 1, 2
    introduction: String,
    avatar: String,
    role: Number // 管理员1，编辑2
}

const UserModel = mongoose.model('user', new Schema(UserType))

module.exports = UserModel