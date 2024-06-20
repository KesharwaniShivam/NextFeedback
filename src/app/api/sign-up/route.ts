import dbConnection from "@/lib/dbConnect";
import { UserModel } from "@/models/User";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";

export async function POST(request : Request){
    await dbConnection();

    try {
      const {username,email,password} = await request.json();
    } catch (error) {
        console.error('Sign Up error',error)
        return Response.json({
            success : false,
            message : "Signup error"
        },
        {
            status : 500
        }
    )
    }
}