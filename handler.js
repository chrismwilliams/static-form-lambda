"use strict";

require("dotenv").config();
const sgMail = require("@sendgrid/mail");
// remember to include your API_KEY value pair on AWS lambda
sgMail.setApiKey(process.env.API_KEY);
// set the wrappers "{{ }}" that will be replaced in our template
sgMail.setSubstitutionWrappers("{{", "}}");

module.exports.contact = (event, context, callback) => {
  // parse our form data
  const formData = JSON.parse(event.body);

  // check if bot
  // this could easily be adapted to make use of Google's reCAPTURE
  if (formData.honeypot) return;

  // setup email data options
  let mailOptions = {
    to: "my_prefered_recipient@mail.com",
    from: formData.reply_to,
    subject: "New Static Contact Form",
    templateId: "My_Template_ID_From_SendGrid",
    // Substitutions replace the {{ }} in your SendGrid template, e.g. {{ name }}
    substitutions: {
      name: formData.name,
      email: formData.reply_to,
      message: formData.message
    }
  };

  // send mail with defined transport object
  sgMail.send(mailOptions, (error, data) => {
    const response = {
      statusCode: error ? error.code : 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        message: error ? error.message : "success"
      })
    };

    callback(null, response);
  });
};
