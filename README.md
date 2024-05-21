# Karriereflyt

## Getting Started

1. **Install dependencies:**

```bash
npm install
```

2. **Run the development server:**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Nodemailer

### **Set up nodemailer**

Get mail and keys for .env file:

```env
EMAIL=karriereflyt@gmail.com
EMAIL_PASS=passkey
```

### **Update Mail service passkey**

Log in with karriereflyt@gmail.com.

Use this directly to manage [Application Spesific](https://security.google.com/settings/security/apppasswords) password. Or read the documentation on [nodemailer.com](https://nodemailer.com/usage/using-gmail/).

### **Update email reciever**

Go to src/app/config/nodemailer.js and change `mailOptions` to desired email.

```javascript
export const mailOptions = {
  from: email,
  to: 'add email here',
};
```
