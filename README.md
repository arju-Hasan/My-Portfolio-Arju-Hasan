# Portfolio (Vite + React)

Scaffolded Vite React project with Tailwind CSS and Framer Motion for animations.

## Setup

1. npm install
2. npm run dev

## Notes

- Uses Tailwind for styling and includes animated background and shadow utilities in `src/index.css`.
- Replace placeholder images in `src/components` with your own assets.

## Contact form (EmailJS)

This project includes a client-side integration with EmailJS so messages submitted via the contact form can be delivered to your email.

Setup steps:

1. Create an account at https://www.emailjs.com and add an Email Service and Email Template (see EmailJS docs).
2. In the template, include these fields: `from_name`, `from_email`, `subject`, `message`.

   Recommended template setup:

   - Template subject: `New message from {{from_name}} — {{subject}}`

   - Template body:

   ```text
   Name: {{from_name}}
   Email: {{from_email}}
   Subject: {{subject}}

   Message:
   {{message}}
   ```

Note: to make replying easy, either include the sender email in the template (example above includes `{{from_email}}`) or set the template's **Reply-To** header to `{{reply_to}}` so replies are sent directly to the sender's email.

```
npm install @emailjs/browser
```

5. Run the dev server and test the form: `npm run dev`.

Note: Environment variables must start with `VITE_` for Vite to expose them to the client-side code.
