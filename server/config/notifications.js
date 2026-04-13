const { Resend } = require('resend');

const sendEmailNotification = async ({ name, email, subject, message }) => {
  if (!process.env.RESEND_API_KEY) {
    console.warn('⚠️  Resend API key not configured, skipping email notification');
    return false;
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `📬 New Contact: ${subject || 'Portfolio Message'}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f0f0f; color: #e5e5e5; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #6366f1, #8b5cf6); padding: 30px; text-align: center;">
            <h1 style="margin: 0; color: #fff; font-size: 24px; letter-spacing: -0.5px;">New Portfolio Message</h1>
          </div>
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; color: #888; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; width: 100px;">From</td>
                <td style="padding: 12px 0; color: #fff; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #888; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Email</td>
                <td style="padding: 12px 0;"><a href="mailto:${email}" style="color: #6366f1;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #888; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Subject</td>
                <td style="padding: 12px 0; color: #fff;">${subject || 'Portfolio Contact'}</td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding: 20px; background: #1a1a1a; border-radius: 8px; border-left: 3px solid #6366f1;">
              <p style="margin: 0 0 8px; color: #888; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
              <p style="margin: 0; color: #e5e5e5; line-height: 1.7; white-space: pre-wrap;">${message}</p>
            </div>
            <div style="margin-top: 24px; text-align: center;">
              <a href="mailto:${email}?subject=Re: ${subject}" style="display: inline-block; padding: 12px 28px; background: #6366f1; color: #fff; text-decoration: none; border-radius: 6px; font-weight: 600;">Reply to ${name}</a>
            </div>
          </div>
          <div style="padding: 16px 32px; border-top: 1px solid #1a1a1a; text-align: center; color: #555; font-size: 12px;">
            Sent from your portfolio contact form • ${new Date().toLocaleString()}
          </div>
        </div>
      `,
    });
    console.log('✅ Email notification sent');
    return true;
  } catch (error) {
    console.error('❌ Email send error:', error.message);
    return false;
  }
};

const sendSMSNotification = async ({ name, email, message }) => {
  if (!process.env.TWILIO_SID || !process.env.TWILIO_AUTH_TOKEN || !process.env.TWILIO_PHONE) {
    console.warn('⚠️  Twilio credentials not configured, skipping SMS notification');
    return false;
  }

  try {
    const twilio = require('twilio');
    const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

    await client.messages.create({
      body: `📬 New Portfolio Contact!\nFrom: ${name} (${email})\nMessage: ${message.substring(0, 100)}${message.length > 100 ? '...' : ''}`,
      from: process.env.TWILIO_PHONE,
      to: process.env.OWNER_PHONE || process.env.TWILIO_PHONE,
    });
    console.log('✅ SMS notification sent');
    return true;
  } catch (error) {
    console.error('❌ SMS send error:', error.message);
    return false;
  }
};

module.exports = { sendEmailNotification, sendSMSNotification };