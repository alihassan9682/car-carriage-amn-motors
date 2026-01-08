import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { name, email, phone, subject, message } = body

        if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
            console.error('Missing GMAIL_USER or GMAIL_APP_PASSWORD in environment variables.')
            return NextResponse.json(
                { message: 'Configuration error: SMTP credentials not found in .env' },
                { status: 500 }
            )
        }

        // Create a transporter using Gmail SMTP
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        })

        // Email content
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_USER, // Send to yourself
            replyTo: email,
            subject: `New Contact Form Submission: ${subject || 'General Inquiry'}`,
            text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
        }

        // Send the email
        await transporter.sendMail(mailOptions)

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })
    } catch (error: any) {
        console.error('Error sending email:', error)
        return NextResponse.json(
            { message: 'Failed to send email', error: error.message },
            { status: 500 }
        )
    }
}
