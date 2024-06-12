
import {z} from "zod"

export const msgSchema = z.object({
   content : z.string().max(200, "message must not be more than 200 character")
})