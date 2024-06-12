import {z} from "zod"

export const usernameValidation = z
    .string()
    .min(3, "username must be atleast 3 character")
    .max(20, "username must not be more than 20 character")
    .regex(/^[a-zA-Z0-9_]{3,16}$/, "username must not contain any speacial character" )

export const signUpSchema = z.object({
    username : usernameValidation,
    email : z.string().email({message : "Invalid Email"}),
    password : z.string().min(6, {message : "password must be atleast 6 character"})
})