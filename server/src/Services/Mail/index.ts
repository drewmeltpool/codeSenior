import dotenv from 'dotenv';
import nodemailer, { Transporter } from 'nodemailer';
import { google } from 'googleapis';

dotenv.config();

const oAuth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URL
);

oAuth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

class MailService {
  private readonly transporter: (_accessToken: any) => Transporter;

  public constructor() {
    this.transporter = (accessToken: string) =>
      nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.MAIL_USER,
          clientId: process.env.GOOGLE_CLIENT_ID,
          refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
          accessToken: accessToken,
        },
      });
  }

  public async sendActivationEmail(email: string, link: string) {
    const accessToken = await oAuth2Client.getAccessToken();

    await this.transporter(accessToken).sendMail({
      from: process.env.MAIL_USER,
      to: email,
      subject: `Activation link ${process.env.API_URL}`,
      text: '',
      html: `<div>  
        <h4>To activate your account just open link</h4>
        <a href="${process.env.API_URL}/user/activation/${link}">Click me</a>
      </div>`,
    });
  }

  public async verify() {
    const accessToken = await oAuth2Client.getAccessToken();

    this.transporter(accessToken).verify((err) => {
      if (err) console.error(err);
      console.info('Mail service - correct');
    });
  }
}

export default new MailService();
