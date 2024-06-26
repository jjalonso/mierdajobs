import _ from "lodash";
import { SendVerificationRequestParams } from "next-auth/providers/email";

import { htmlTemplate, textTemplate } from "./template";

const sendVerificationRequest = async ({
  identifier: email,
  url,
}: SendVerificationRequestParams) => {
  const response = await fetch("https://api.postmarkapp.com/email", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "X-Postmark-Server-Token": process.env.POSTMARK_TOKEN || "",
      "References": new Date().getTime().toString()
    },
    body: JSON.stringify({
      "From": "Mierdajobs <hola@mierdajobs.com>",
      "To": email,
      "Subject": `Tu invitacion para entrar #${_.random(1000, 9999)}`,
      "TextBody": textTemplate(url),
      "HtmlBody": htmlTemplate(url),
      "MessageStream": "outbound"
    })
  })
  const data = await response.json()
  if (data.ErrorCode !== 0) {
    console.error("Email could not be sent", JSON.stringify(data))
    throw new Error("Email could not be sent")
  }
}

export default sendVerificationRequest;