import {google} from "googleapis"



    const oauth2Client = new google.auth.OAuth2(
        "145235191844-f43anvogvcut7gab7p1etehf0idjcqs5.apps.googleusercontent.com",
        "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",
        "https://localhost:3000/user/oauth"
      );
      
      // generate a url that asks permissions for Blogger and Google Calendar scopes
      const scopes = [
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile'
      ];
      
      export const url = oauth2Client.generateAuthUrl({
        // 'online' (default) or 'offline' (gets refresh_token)
        access_type: 'offline',
      
        // If you only need one scope you can pass it as a string
        scope: scopes
      });
      
