import mongoose, { Document, Schema } from "mongoose";

export interface Message extends Document {
    content : string;
    createdAt : Date
}

const MessageSchema : Schema<Message> = new Schema({
    content :{
        type : String,
        required : true,
    },
    createdAt : {
        type : Date,
        required : true,
        default : Date.now
    }
})

export interface User extends Document {
    username : string;
    email : string;
    password : string;
    varifyCode : string;
    varifycodeExpiry : Date;
    isAcceptingMessages : boolean;
    messages : Message[];
}

const UserSchema : Schema<User> = new Schema({

    username : {
        type : String ,
        required : [true, "Username is required"] ,
        unique : true,
        trim : true , // if there is any spaces in the username 

    },
    email : {
        type : String,
        required : [true, "Email is required"],
        match : [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ , "Enter a valid Email"] ,  
        // to varify the email , we using some 'Regex' (regular expression) 

        unique : true,
    },
    password : {
        type : String,
        required : [true, "password is required"] ,
    },
    varifyCode : {
        type : String,
        required : [true, "varifyCode is required"] ,
    },
    varifycodeExpiry : {
        type : Date,
        required : [true, "varifycodeExpiry is required"] ,
    },
    isAcceptingMessages: {
        type : Boolean,
        default : true,
    },
    messages : [MessageSchema]      // if it is string type we can write [string]  but we have messageSchema so.

})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || (mongoose.model<User>("User", UserSchema))
