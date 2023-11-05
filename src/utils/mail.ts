import Mailjet from "node-mailjet";

export async function sendMail(user_email:string){
    
        const mailjet = Mailjet.apiConnect(
          '7a0a6e7d8ff9de554ec8413298958eea',
          '13bf9a1d5cc1b42464bd9519385d2224'
        )
    
        if(!user_email) return new Response('Hello, From Next.js');
    
    
          const request = mailjet
            .post('send', { version: 'v3.1' })
            .request({
              Messages: [
                {
                  From: {
                    Email: "support@vtiro.com",
                    Name: "Clothing WebApp"
                  },
                  To: [
                    {
                      Email: "sainideepak40395@gmail.com",
                      Name: "passenger 1"
                    }
                  ],
                  Subject: "Coustomer Request!",
                  TextPart: "Dear user you get an buy request from a coustomer!",
                  HTMLPart: `<h3>A User with email ${user_email} have showed interseted in you product named of size  </h3>`
                }
              ]
            })
    
            request
                .then((result:any) => {
                    console.log(result.body)
                    return true;
                })
                .catch((err:any) => {
                    console.log(err);
                    return false;
                })
}