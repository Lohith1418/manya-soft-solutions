import { NextResponse } from 'next/server';
import { transporter } from '@/lib/nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.CONTACT_NOTIFICATION_EMAIL || 'info@manyasoftsolutions.com';

    // Send email via Nodemailer
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER || recipientEmail}>`,
      replyTo: email,
      to: recipientEmail,
      subject: `New Contact Form Inquiry: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #0b192c; border-bottom: 2px solid #0052cc; padding-bottom: 10px;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'N/A'}</p>
          <p><strong>Service of Interest:</strong> ${service || 'General'}</p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
          <h3>Message / Project Details:</h3>
          <p style="white-space: pre-wrap; background: #f4f6f8; padding: 15px; rounded: 8px;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: 'Email sent successfully!' });
  } catch (error: any) {
    console.error('Nodemailer Error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
