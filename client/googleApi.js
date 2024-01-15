



    // const oauth2Client = new google.auth.OAuth2(
    //     "145235191844-f43anvogvcut7gab7p1etehf0idjcqs5.apps.googleusercontent.com",
    //     "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",
    //     "https://localhost:3000/user/oauth"
    //   );
      
    //   // generate a url that asks permissions for Blogger and Google Calendar scopes
    //   const scopes = [
    //     'https://www.googleapis.com/auth/userinfo.email',
    //     'https://www.googleapis.com/auth/userinfo.profile'
    //   ];
      
    //   export const urlGoogle = oauth2Client.generateAuthUrl({
    //     // 'online' (default) or 'offline' (gets refresh_token)
    //     access_type: 'offline',
      
    //     // If you only need one scope you can pass it as a string
    //     scope: scopes
    //   });
      
    export function oauthUrl() {
      const url = "https://accounts.google.com/o/oauth2/v2/auth";
      const query = {
        client_id:
          "145235191844-f43anvogvcut7gab7p1etehf0idjcqs5.apps.googleusercontent.com",
        redirect_uri: "http://localhost:3000/user/oauth",
        response_type: "code",
        scope: [
          "https://www.googleapis.com/auth/userinfo.email",
         "https://www.googleapis.com/auth/userinfo.profile",
        ].join(" "),
        prompt: "consent",
      };
      const queryString = new URLSearchParams(query).toString();
      return `${url}?${queryString}`;
    }