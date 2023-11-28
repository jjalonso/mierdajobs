
export const recordPlausibleEvent = async (
  eventName: string,
  props: Record<string, string> = {},
  headers: Record<string, string> = {}
): Promise<unknown> => process.env.NODE_ENV === "production" &&
  fetch("https://plausible.io/api/event", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify({
      name: eventName,
      url: "http://mierdajobs.com",
      domain: "mierdajobs.com",
      props: props,
    })
  });