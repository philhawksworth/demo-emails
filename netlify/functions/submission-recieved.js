import { sendEmail } from "@netlify/emails";

exports.handler = async (event, context) => {


  await sendEmail({
    from: "phawksworth@gmail.com",
    to: "phil@netlify.com",
    subject: "Demo the emil integrations",
    template: "subscribe",
    parameters: {
      name: "Phil"
    },
  });

  return {
    statusCode: 200,
    body: "Hello, World"
  };
};

