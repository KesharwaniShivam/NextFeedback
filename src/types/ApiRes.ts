// defining the type of API response 

import { Message } from "@/models/User";

export interface ApiRes{
    success : boolean;
    message : string;
    isAcceptingMessages ?: boolean;  // "?" means it is optional(we dont need this all the time lets say at signing up we dont want to know , it is accepting messages or not )

    messages ?: Array<Message>; // if we want message responses in bulk from database 
}