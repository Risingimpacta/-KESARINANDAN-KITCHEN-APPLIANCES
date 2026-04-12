import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return new Response(
        JSON.stringify({ error: "All required fields must be filled" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: "knhomedecore@gmail.com",
      subject: `New Enquiry: ${subject || "Kitchen Appliances Enquiry"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626;">New Customer Enquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; background: #f3f4f6;"><strong>Name:</strong></td><td style="padding: 8px;">${name}</td></tr>
            <tr><td style="padding: 8px; background: #f3f4f6;"><strong>Email:</strong></td><td style="padding: 8px;">${email}</td></tr>
            <tr><td style="padding: 8px; background: #f3f4f6;"><strong>Phone:</strong></td><td style="padding: 8px;">${phone}</td></tr>
            <tr><td style="padding: 8px; background: #f3f4f6;"><strong>Subject:</strong></td><td style="padding: 8px;">${subject || "N/A"}</td></tr>
            <tr><td style="padding: 8px; background: #f3f4f6; vertical-align: top;"><strong>Message:</strong></td><td style="padding: 8px;">${message}</td></tr>
          </table>
          <p style="margin-top: 20px; color: #6b7280;">This enquiry was sent from the Kesarinandan Kitchen Appliances website.</p>
        </div>
      `,
    };

    // Auto-reply to customer
    const customerMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting Kesarinandan Kitchen Appliances",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626;">Thank You for Your Interest!</h2>
          <p>Dear ${name},</p>
          <p>Thank you for contacting <strong>Kesarinandan Kitchen Appliances</strong>. We have received your enquiry and our team will get back to you within 24 hours.</p>
          <h3 style="color: #374151; margin-top: 20px;">Your Enquiry Details:</h3>
          <p><strong>Subject:</strong> ${subject || "General Enquiry"}</p>
          <p><strong>Message:</strong> ${message}</p>
          <hr style="margin: 20px 0;" />
          <p style="color: #6b7280;">For immediate assistance, you can also reach us on WhatsApp at +91 9511629883</p>
          <p style="margin-top: 20px;">Warm Regards,<br /><strong>Team Kesarinandan</strong></p>
          <p style="font-size: 12px; color: #9ca3af;">C-14, Ramlasman Sankul, Sindhi Chowk, K.L. College Road, Amravati 444604</p>
        </div>
      `,
    };

    // Send emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(customerMailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Enquiry sent successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Email error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send enquiry. Please try again later." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}