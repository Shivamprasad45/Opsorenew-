import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { fullName, companyName, email, subject, message, employees } =
      await request.json();

    if (!fullName || !email || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const html = `
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Company Name:</strong> ${companyName}</p>
      <p><strong>Email ID:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Number of Employees:</strong> ${employees}</p>
      <p><strong>Message:</strong></p>
      <p>${String(message).replace(/\n/g, "<br/>")}</p>
    `;

    const { data, error } = await resend.emails.send({
      from: "OPSORE <demo@lalinx.com>",
      to: "care@lalinx.com",
      replyTo: email,
      subject: subject || "Contact Request",
      html,
    });

    if (error) {
      return Response.json({ error: error.message }, { status: 502 });
    }

    return Response.json({ id: data?.id }, { status: 200 });
  } catch (err) {
    return Response.json({ error: "Failed to send" }, { status: 500 });
  }
}
