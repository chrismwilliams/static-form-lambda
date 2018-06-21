# AWS Lambda For A Static Contact Form 📬

A simple AWS Lambda serverless template creating an api to post your form data to, which can then be emailed to your preferred address. Ideal for a contact form on a static website

## Uses: Amazon Web Service, Serverless & SendGrid

## Requirements:

- An [AWS](https://aws.amazon.com/) Account
- Install serverless cli: `npm install -g serverless`
  - Add your AWS credentials to [serverless](https://serverless.com/framework/docs/providers/aws/guide/credentials/)
- A [SendGrid](https://sendgrid.com/) Account
  - An api [key](https://app.sendgrid.com/settings/api_keys), (_keep this handy as by default you have to add it to AWS after deploying_)
  - (Optional) A configured template and resulting template ID to template your emails
- Download this repository
  - Install dependencies: `yarn install` / `npm install`
  - Rename sample.env to .env and add your SendGrid API key
  - (Optional) Update the serverless.yml region to your preference, defaults to London.
- Open up handler.js and update the mailOptions object to your preference
- After deploying via the serverless command, add your SendGrid API_KEY to the lambda environment

## Terminal Commands:

```bash
$ serverless deploy -v
# This pushes the whole thing to AWS, creating your personal endpoint to post your form data to
# You can now view the lambda (aws > Lambda > Functions) and add your SendGrid API_KEY to the environment

$ serverless deploy function -f contact
# Made changes to just the handler.js file?
# Instead of deploying the whole thing again which can take a while, this just updates the Lambda.

$ serverless offline start
# This command will spin up a local server that allows you to test your function locally.
```

## Form Example

```html
<!--
  Simple form example, remember to add your form action route,
  either AWS or localhost
-->
<form action="URL_HERE" method="post">
  <label for="name">Name</label>
  <input type="text" name="name" id="name">
  <!-- Following input could easily be changed to a reCAPTCHA-->
  <label for="honeypot">Please don't fill this in</label>
  <input type="hidden" name="honeypot" autocomplete="off">
  <!-- -->
  <label for="reply_to">Email</label>
  <input type="email" name="reply_to" id="reply_to">
  <label for="message">Your Message</label>
  <textarea name="message" id="message"></textarea>
  <input type="submit" value="Submit">
</form>
```
