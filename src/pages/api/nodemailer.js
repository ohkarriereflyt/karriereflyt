import { mailOptions, transporter } from "../../app/config/nodemailer";
import { createRouter } from "next-connect";
import multer from 'multer';

const CONTACT_MESSAGE_FIELDS = {
    name: "Navn",
    email: "Email",
    subject: "Emne",
    message: "Melding",
};

// Generate the email content
const generateEmailContent = (data) => {
    // Generate the text content
    const stringData = Object.entries(data).reduce(
        (str, [key, val]) =>
            (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`),
        ""
    );

    // Return the email content
    return {
        text: stringData,
        html: `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Ny kontakt</title>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta theme-color="#fffbf8" />
        </head>
        <body style="font-family: 'Poppins', Arial, sans-serif; background-color: #fffbf8; margin: 0;">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                    <td align="center" style="padding: 16px;">
                        <div style="width: 100%; max-width: 600px; background-color: #fffbf8; border: 4px solid #92a6ac; border-radius: 16px; overflow: hidden;">
                            <table class="content" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse; width: 100%;">
                                <tr>
                                    <td class="header" style="background-color: #6b858d; text-align: center; color: #fffbf8; ">
                                        <h3>
                                            Ny kontakt</h3>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="body" style="padding: 20px 20px 8px; text-align: left; font-size: 16px; color: #4a4a4a;">
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
                                            <tr>
                                                <td style="font-weight: bold; padding: 10px 10px 10px 0; vertical-align: top; width: 50px;">
                                                    Navn:</td>
                                                <td>
                                                    ${data.name}</td>
                                            </tr>
                                            <tr>
                                                <td style="font-weight: bold; padding: 10px 10px 10px 0; vertical-align: top;">
                                                    Email:</td>
                                                <td>
                                                    <!-- Email -->
                                                    <a href="mailto:${data.email}" style="color: #4a4a4a; text-decoration: none;">
                                                        ${data.email}</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="font-weight: bold; padding: 10px 10px 0 0; vertical-align: top;">
                                                    <!-- Emne -->
                                                    ${data.subject}</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 0 20px 20px; text-align: left; font-size: 16px; color: #4a4a4a;">
                                        <!-- Melding -->
                                        ${data.message}</td>
                                </tr>
                            </table>
                        </div>
                    </td>
                </tr>
            </table>
        </body>
        </html>
        `,
    };
};

// Set up multer for file storage
const storage = multer.memoryStorage(); // Storing files in memory
const upload = multer({ storage: storage });

const router = createRouter();

// Apply multer middleware to handle multipart/form-data only for POST requests.
router.use(upload.single('file')); // 'file' should match the FormData key in the frontend

router.post(async (req, res) => {
    const { body, file } = req;

    // Check for required form fields
    if (!body.name || !body.email || !body.subject || !body.message) {
        return res.status(400).send({ message: "Det mangler obligatoriske felt." });
    }

    // Attempt to process the email
    try {
        const emailContent = generateEmailContent(body);

        // Prepare the email options, including the attachment
        const mailDetails = {
            ...mailOptions,
            subject: body.subject,
            text: emailContent.text,
            html: emailContent.html,
        };

        // Add attachment if file is provided
        if (file) {
            mailDetails.attachments = [
                {
                    filename: file.originalname,
                    content: file.buffer,
                    contentType: file.mimetype,
                },
            ];
        }

        // Send the email
        await transporter.sendMail(mailDetails);
        return res.status(200).json({ success: true });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

export default router.handler();

export const config = {
    api: {
        bodyParser: false, // Disabling the default Next.js body parser as multer will handle it
    },
};