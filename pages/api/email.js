// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { StatusCodes, ReasonPhrases } from "http-status-codes";

export default async function handler(req, res) {
  const body = req.body;
  try {
    const response = await fetch(process.env.API_URL + "/sendgrid/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();

    res.status(StatusCodes.CREATED).json({
      data: {
        message: ReasonPhrases.CREATED,
        data: data,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: {
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        message: "Something went wrong",
        details: error?.response?.body || error?.stack,
      },
    });
  }
}
