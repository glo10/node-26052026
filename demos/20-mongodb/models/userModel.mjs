import { Schema, model } from 'mongoose'

const userSchema = Schema({
    firstname: { type: String, required: true},
    laststname: { type: String, required: true},
    email: { type: String}
})
export default model('User', userSchema)