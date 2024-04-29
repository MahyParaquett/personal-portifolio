// sendEmail.js

const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {
  const { firstName, lastName, email, phone, message } = JSON.parse(event.body);

  const contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "taynaparaquett@gmail.com", // Use your Gmail email here
      pass: "omiryzstbuizlcjg", // Use your Gmail password here
    },
  });

  try {
    await contactEmail.sendMail({
      from: `${firstName} ${lastName}`,
      to: "taynaparaquett@gmail.com", // Use your Gmail email here
      subject: "Contact Form Submission - Portfolio",
      html: `<p>Name: ${firstName} ${lastName}</p>
             <p>Email: ${email}</p>
             <p>Phone: ${phone}</p>
             <p>Message: ${message}</p>`,
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ code: 200, message: "Message sent successfully" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ code: 500, message: "Failed to send message" }),
    };
  }
};
