import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone, subject, message } = body

    if (!process.env.YAHOO_EMAIL || !process.env.YAHOO_APP_PASSWORD) {
      return NextResponse.json(
        { message: 'Yahoo SMTP credentials missing' },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: 'yahoo',
      auth: {
        user: process.env.YAHOO_EMAIL,
        pass: process.env.YAHOO_APP_PASSWORD,
      },
    })

    const recipientEmail = process.env.BUSINESS_EMAIL || process.env.YAHOO_EMAIL

    await transporter.sendMail({
      from: process.env.YAHOO_EMAIL,
      to: recipientEmail,
      // Removed replyTo as it can trigger 550 errors in some Yahoo/SMTP setups
      subject: `Contact Form: ${subject || 'General'}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
      `,
      html: `
        <h3>New Contact Form</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b><br/>${message.replace(/\n/g, '<br/>')}</p>
        <hr/>
        <p><i>Reply to: ${email}</i></p>
      `,
    })

    return NextResponse.json({ message: 'Email sent successfully' })
  } catch (error: any) {
    console.error('SMTP Error:', error)

    return NextResponse.json(
      {
        message: 'Email service failed',
        error: error.message,
        hint: 'Check SMTP credentials and recipient address.'
      },
      { status: 500 }
    )
  }
}
