import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,

})

const AuthUsers = models.user || model('user', userSchema)

export default AuthUsers;