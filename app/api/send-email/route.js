import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, phone, message, room } = await req.json();

       const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // ✅ FIX
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // you receive email
      subject: "New Property Inquiry",
      html: `
  <div style="font-family: Arial, sans-serif; background:#f4f6f8; padding:20px;">
    
    <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
      
      <!-- Header -->
      <div style="background:linear-gradient(135deg,#2563eb,#1e3a8a); padding:20px; color:white; text-align:center;">
        <h1 style="margin:0; font-size:22px;">🏢 New Property Inquiry</h1>
        <p style="margin:5px 0 0; font-size:14px;">You have received a new lead</p>
      </div>

      <!-- Body -->
      <div style="padding:20px;">
        
        <div style="margin-bottom:15px;">
          <p style="margin:0; font-size:13px; color:#888;">Full Name</p>
          <p style="margin:5px 0; font-size:16px; font-weight:600;">${name}</p>
        </div>

        <div style="margin-bottom:15px;">
          <p style="margin:0; font-size:13px; color:#888;">Phone Number</p>
          <p style="margin:5px 0; font-size:16px; font-weight:600;">${phone}</p>
        </div>

        <div style="margin-bottom:15px;">
          <p style="margin:0; font-size:13px; color:#888;">Selected Unit</p>
          <p style="margin:5px 0; font-size:16px; font-weight:600; color:#2563eb;">
            ${room}
          </p>
        </div>

        <div style="margin-bottom:15px;">
          <p style="margin:0; font-size:13px; color:#888;">Message</p>
          <p style="margin:5px 0; font-size:15px; line-height:1.5;">
            ${message}
          </p>
        </div>

      </div>

      <!-- Footer -->
      <div style="background:#f9fafb; padding:15px; text-align:center; font-size:12px; color:#777;">
        <p style="margin:0;">This inquiry was submitted from your website</p>
      </div>

    </div>

  </div>
`
    });

    return Response.json({ success: true });
  } catch (error) {
    console.log(error);
    return Response.json({ success: false });
  }
}