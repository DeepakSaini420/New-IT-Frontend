import Mailjet from "node-mailjet";
import { publicKey,privateKey } from "@/utils/api_key";

type reqData = {
    name:string,
    email:string,
    phone:string,
    additionalMessage:string
}

export async function POST(request: Request){
    
    const data:reqData = await request.json();
    console.log(publicKey,privateKey);
    const mailjet = Mailjet.apiConnect(
        publicKey,
        privateKey
      )
  
      if(data.email.length===0) return Response.json('Hello, From Next.js');
  
  
        const requests = mailjet
          .post('send', { version: 'v3.1' })
          .request({
            Messages: [
              {
                From: {
                  Email: "support@vtiro.com",
                },
                To: [
                  {
                    Email: data.email,
                  }
                ],
                Subject: "Thank You!!",
                HTMLPart: `<h3>Thank You For Choosing Us! We will soon contact you through your Email Address</h3>`
              }
            ]
          })

          const requests1 = mailjet
          .post('send', { version: 'v3.1' })
          .request({
            Messages: [
              {
                From: {
                  Email: "support@vtiro.com",
                },
                To: [
                  {
                    Email: "support@vtiro.com",
                  }
                ],
                Subject: "Customer Mail!",
                TextPart: "Hello You Got a new Email From Custmoer",
                HTMLPart: `
                    <h3>Name:- ${data.name}</h3>
                    <h3>Email:- ${data.email}</h3>
                    <h3>${data.additionalMessage}</h3>
                `
              }
            ]
          })
  
        try {
            const resp = await requests;
            const resp1 = await requests1;
            return Response.json("Successfull");
        } catch (error) {
            console.log(error)
            return Response.json("Unsuccessfull");
        }
  }
