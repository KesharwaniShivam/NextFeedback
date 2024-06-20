import { resend } from "@/lib/resend";

import VerificationEmail from "../../emails/VerificationEmail";

import { ApiRes } from "@/types/ApiRes";

export async function sendVerificationEmail(
    email : string,
    userName : string,
    verificationCode : string
) : Promise<ApiRes> {
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Verification code',
            react: VerificationEmail({username : userName, otp : verificationCode}),
          });
          return {success : true, message : " Verification code send successfully"}
    } catch (error) {
        console.error("Error in sending verification email",error)
        return {success : false, message : "Fail to send verification email"}
    }
}