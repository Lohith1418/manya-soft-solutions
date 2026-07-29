import { NextResponse } from 'next/server';
import { transporter } from '@/lib/nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: 'Email address is required.' },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.CONTACT_NOTIFICATION_EMAIL || 'info@manyasoftsolutions.com';

    // Send email via Nodemailer
    await transporter.sendMail({
      from: `"MANYA Website" <${process.env.SMTP_USER || recipientEmail}>`,
      replyTo: email,
      to: recipientEmail,
      subject: `New Newsletter Subscription`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #0b192c; border-bottom: 2px solid #0052cc; padding-bottom: 10px;">New Newsletter Subscription</h2>
          <p><strong>Subscriber Email:</strong> ${email}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: 'Subscribed successfully!' });
  } catch (error: any) {
    console.error('Nodemailer Newsletter Error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again later.' },
      { status: 500 }
    );
  }
}
