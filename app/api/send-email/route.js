import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const {
      name,
      email,
      phone,
      address,
      budget,
      purpose,
      configuration,
      message,
      room,
    } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: "🏢 New Property Inquiry Lead",
      html: `
  <div style="font-family: Arial, sans-serif; background:#f4f6f8; padding:20px;">
    
    <div style="max-width:650px; margin:auto; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.1);">
      
      <!-- Header -->
      <div style="background:linear-gradient(135deg,#2563eb,#1e3a8a); padding:20px; color:white; text-align:center;">
        <h1 style="margin:0; font-size:22px;">🏢 New Property Inquiry</h1>
        <p style="margin:5px 0 0; font-size:14px;">New lead received from website</p>
      </div>

      <!-- Body -->
      <div style="padding:20px;">

        <!-- Basic Info -->
        <h3 style="margin-bottom:10px; color:#2563eb;">👤 Customer Details</h3>

        ${field("Full Name", name)}
        ${field("Email", email)}
        ${field("Phone", phone)}
        ${field("Address", address)}

        <!-- Property Info -->
        <h3 style="margin:20px 0 10px; color:#2563eb;">🏠 Property Preferences</h3>

        ${field("Selected Unit", room, true)}
        ${field("Budget", budget)}
        ${field("Purpose", purpose)}
        ${field("Configuration", configuration)}

        <!-- Message -->
        <h3 style="margin:20px 0 10px; color:#2563eb;">💬 Message</h3>

        <div style="background:#f9fafb; padding:12px; border-radius:8px; font-size:14px; line-height:1.5;">
          ${message || "No message provided"}
        </div>

      </div>

      <!-- Footer -->
      <div style="background:#f9fafb; padding:15px; text-align:center; font-size:12px; color:#777;">
        <p style="margin:0;">Generated from your Real Estate Admin Panel</p>
      </div>

    </div>
  </div>
`,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.log(error);
    return Response.json({ success: false });
  }
}

// 🔥 helper function for consistent fields
function field(label, value, highlight = false) {
  return `
    <div style="margin-bottom:12px;">
      <p style="margin:0; font-size:12px; color:#888;">${label}</p>
      <p style="margin:4px 0; font-size:15px; font-weight:600; ${
        highlight ? "color:#2563eb;" : ""
      }">
        ${value || "-"}
      </p>
    </div>
  `;
}