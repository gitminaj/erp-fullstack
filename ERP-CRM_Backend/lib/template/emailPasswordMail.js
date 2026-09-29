export const emailPasswordMail = (email, password) => {
  return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Email And Password For Client</title>
        <style>
            body {
                background-color: #ffffff;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.4;
                color: #333333;
                margin: 0;
                padding: 0;
            }
    
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
            }
    
            .logo {
                max-width: 200px;
                margin-bottom: 20px;
            }
    
            .message {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 20px;    
                color: #333333;
            }
    
            .body {
                font-size: 16px;
                margin-bottom: 20px;
            }
    
            .cta {
                display: inline-block;
                padding: 10px 20px;
                color: #000000;
                border-radius: 5px;
                font-size: 16px;
                font-weight: bold;
                margin-top: 20px;
            }
    
            .highlight {
                font-weight: bold;
            }
        </style>
    
    </head>
    
    <body>
        <div class="container">
            <div class="message">Email And Password For Client</div>
            <div class="body">
                <p class="message">Dear Client,</p>
                <p>Your Email<span class="highlight"> ${email}</span></p>
                <p>Your Password<span class="highlight"> ${password}</span></p>
                </p>
                <a class="cta" href="http://localhost:8000/api/auth/login">Go to Login</a>
            </div>
        </div>
    </body>
    
    </html>`;
};
