import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';

dotenv.config();

function createSendMail(mailConfig) {

    const transporter = nodemailer.createTransport(mailConfig);

    return function sendMail({to, subject, text, html, attachments }) {

        const mailOptions = { from: mailConfig.auth.user, to, subject, text, html, attachments};

        return transporter.sendMail(mailOptions);

    }
};

function createSendMailGmail() {

    return createSendMail({

        host: process.env.GMAIL_HOST,
        port: process.env.GMAIL_PORT,
        auth: {
            user: process.env.GMAIL_USERNAME,
            pass: process.env.GMAIL_PASSWORD
        }

    })
}

const mailing = createSendMailGmail();

const detailGmail = async (email, product) => {

    const emailAccount = email ?
        email :
        'elon.musk@tesla.com';

    const emailSubject = 'Clothing Order';

    const emailHtml = `<h2>Hello!</h2><h3>Your order is on its way.</h3>
    We are glad you have ordered the following shirt/s: <strong>${product.items.description}</strong> (quantity) on date ${product.date}. Your order number is #00${product.orderNumber}.<br><br>We hope you enjoy your football shirt. See you soon!<br><br>Warsen - All rights are reserved to Bruno Pontiz`;

    const emailAttachments = [];

    const attachmentsPath = '';

    if (attachmentsPath) {

        attachments.push({path: attachmentsPath});

    };

    const info = await mailing({

        to: emailAccount,
        subject:emailSubject,
        html: emailHtml,
        attachments: emailAttachments

    });

    console.log(info);
}



export {detailGmail};