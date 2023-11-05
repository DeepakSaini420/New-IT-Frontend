import Mailjet from "node-mailjet";

type RequestBody = {
    user_email:string
}

export async function POST(request: Request){
    console.log(request.body) ;

    const mailjet = Mailjet.apiConnect(
        '7a0a6e7d8ff9de554ec8413298958eea',
        '13bf9a1d5cc1b42464bd9519385d2224'
      )
  
      //if(!user_email) return new Response('Hello, From Next.js');
  
  
        const requests = mailjet
          .post('send', { version: 'v3.1' })
          .request({
            Messages: [
              {
                From: {
                  Email: "post@vtiro.com",
                },
                To: [
                  {
                    Email: "deepak1247@chitkara.edu.in",
                    Name: "passenger 1"
                  }
                ],
                Subject: "Coustomer!",
                TextPart: "Dear user you get an buy request from a coustomer!",
                HTMLPart: `<h3>A User with email  have showed interseted in you product named of size  </h3>`
              }
            ]
          })
  
        try {
            const resp = await requests;
            console.log(resp.body);
            return Response.json("Successfull");
        } catch (error) {
            console.log(error)
            return Response.json("Unsuccessfull");
        }
  }
