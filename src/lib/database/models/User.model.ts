import { Schema, model, models } from "mongoose";

export interface IUser {
    clerkid: string;
    email: string;
    username: string;
    photo?: string;
    firstname: string;
    lastname: string;
    planId: string;
    CreditBalanace: string;
}

const UserSchema = new Schema({
    clerkid: { type: String, required: true ,unique:true},
    email: { type: String, required: true,unique:true },
    username: { type: String, required: true,unique:true },
    photo: { type: String ,required:true},
    firstname: { type: String,  },
    lastname: { type: String,  },
    planId: { type: String,default:1 },
    CreditBalanace: { type: Number,default:10 }
})

const User = models.User || model('User', UserSchema)
export default User