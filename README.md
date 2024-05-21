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

Get mail and keys for `.env.local` file:

```env
EMAIL=karriereflyt@gmail.com
EMAIL_PASS=passkey
```

### **Update Mail service passkey**

Log in with karriereflyt@gmail.com.

Use this directly to manage [Application Spesific](https://security.google.com/settings/security/apppasswords) password. Or read the documentation on [nodemailer.com](https://nodemailer.com/usage/using-gmail/).

### **Update email reciever**

Go to `src/app/config/nodemailer.js` and change `mailOptions` to desired email.

```javascript
export const mailOptions = {
  from: email,
  to: 'add email here',
};
```

## RECMAN

Recman is implemented in `applicants/page.js`

Set recman key in `.env.local` file:

```env
RECMAN_API_SECRET=key
```

[Read Docs](https://developers.recman.no/#b370496f-5492-4fca-b313-a70ce3f8972b)

## Sanity

Set sanity id in `.env.local` file:

```env
SANITY_PROJECT_ID=id
```
