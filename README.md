# AWS Lambda For A Static Contact Form 📬

A simple AWS Lambda serverless template creating an api to post your form data to, which can then be emailed to your preferred address. Ideal for a contact form on a static website

## Uses: Amazon Web Service, Serverless & SendGrid

## Requirements:

- An [AWS](https://aws.amazon.com/) Account
- Install serverless cli: `npm i -g serverless`
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
$ serverless deploy
# This pushes the whole thing to AWS, creating your personal endpoint to post your form data to
# You can now view the lambda (aws -> Lambda -> Functions) and add your SendGrid API_KEY to the environment

$ serverless deploy function --function contact
# Made changes to just the handler.js file?
# Instead of deploying the whole thing again which can take a while, this just updates the Lambda.

$ serverless offline start
# This command will spin up a local server that allows you to test your function locally.
```
