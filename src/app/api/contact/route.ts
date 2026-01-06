import nodemailer from "nodemailer";

export async function POST(req: any) {
  try {
    const { name, email, message, serviceType, phone } = await req.json();
    
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400 }
      );
    }
    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    
    await transporter.sendMail({
      from: `"Agency Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: `New Lead from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body {
                margin: 0;
                padding: 0;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                background-color: #f5f5f5;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
              }
              .header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                padding: 40px 30px;
                text-align: center;
              }
              .header h1 {
                margin: 0;
                color: #ffffff;
                font-size: 28px;
                font-weight: 600;
              }
              .content {
                padding: 40px 30px;
              }
              .field {
                margin-bottom: 25px;
                border-left: 4px solid #667eea;
                padding-left: 20px;
              }
              .field-label {
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                color: #667eea;
                font-weight: 600;
                margin-bottom: 5px;
              }
              .field-value {
                font-size: 16px;
                color: #333333;
                line-height: 1.6;
                word-wrap: break-word;
              }
              .message-box {
                background-color: #f8f9fa;
                border-radius: 8px;
                padding: 20px;
                margin-top: 10px;
              }
              .footer {
                background-color: #f8f9fa;
                padding: 30px;
                text-align: center;
                border-top: 1px solid #e0e0e0;
              }
              .footer p {
                margin: 0;
                color: #666666;
                font-size: 14px;
              }
              .badge {
                display: inline-block;
                background-color: #667eea;
                color: #ffffff;
                padding: 6px 14px;
                border-radius: 20px;
                font-size: 12px;
                font-weight: 600;
                margin-top: 10px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🎯 New Lead Submission</h1>
              </div>
              
              <div class="content">
                <div class="field">
                  <div class="field-label">Name</div>
                  <div class="field-value">${name}</div>
                </div>
                
                <div class="field">
                  <div class="field-label">Email Address</div>
                  <div class="field-value">
                    <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a>
                  </div>
                </div>
                
                ${phone ? `
                <div class="field">
                  <div class="field-label">Phone Number</div>
                  <div class="field-value">
                    <a href="tel:${phone}" style="color: #667eea; text-decoration: none;">${phone}</a>
                  </div>
                </div>
                ` : ''}
                
                ${serviceType ? `
                <div class="field">
                  <div class="field-label">Service Interest</div>
                  <div class="field-value">
                    <span class="badge">${serviceType}</span>
                  </div>
                </div>
                ` : ''}
                
                <div class="field">
                  <div class="field-label">Message</div>
                  <div class="message-box">
                    <div class="field-value">${message}</div>
                  </div>
                </div>
              </div>
              
              <div class="footer">
                <p>Received on ${new Date().toLocaleString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });
    
    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);
    return new Response(
      JSON.stringify({ error: "Email failed to send" }),
      { status: 500 }
    );
  }
}