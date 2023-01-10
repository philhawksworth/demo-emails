import { sendEmail } from "@netlify/emails";

exports.handler = async (event, context) => {
  await sendEmail({
    from: "phawksworth@gmail.com",
    to: "phil@netlify.com",
    subject: "Testing the email integration",
    template: "subscribed",
    parameters: {
      name: "Phil"
    },
  });

  return {
    statusCode: 200,
    body: "Email triggered"
  };
};


