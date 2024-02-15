import emailjs from "@emailjs/browser";

const TEMPLATE_ID = "template_bsg4ll3";
const SERVICE_ID = "service_9mufqsg";
const PUBLIC_KEY = "1aZqmzQvImkj3tiv6";

emailjs.init(PUBLIC_KEY);

export const sendEmail = async (formData) => {
  const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData);
  if (res.status !== 200) {
    throw new Error({ message: "Failed to send data" });
  }
  return;
};
