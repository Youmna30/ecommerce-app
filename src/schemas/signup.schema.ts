import * as zod from "zod";

export const signupSchema = zod.object({
    name: zod.string().nonempty("*Please enter your name"),
    email:   zod.string()
  .min(1, "*Email is required")
  .email("*Invalid email address"),
    password:zod.string().nonempty("*Please enter your password").regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,"Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"),
    rePassword:zod.string("*Please confirm your password").nonempty("*Please confirm your password"),
    phone: zod.string().nonempty("*Please enter your phone number").regex(/^01[0125][0-9]{8}$/,"*Only Egyptian phone numbers are allowed"),
    terms: zod.boolean().refine(function(value){ return value === true},{message:"*You must accept the terms and conditions"})
}).refine(function(params){
    return params.password === params.rePassword
},{
    error:"Passwords do not match.",
    path:["rePassword"]
})