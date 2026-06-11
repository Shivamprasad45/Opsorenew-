import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function generateMeetingLink(fullName, date, slot) {
  // Use a fixed meeting link if provided (e.g. your personal Google Meet
  // or Zoom room) — set MEETING_LINK in .env.local.
  if (process.env.MEETING_LINK) return process.env.MEETING_LINK;

  // Otherwise generate a unique Jitsi Meet room — free, no account needed.
  // Real Google Meet links require the Google Calendar API (OAuth setup).
  const slug = `${fullName}-${date}-${slot}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  const rand = Math.random().toString(36).slice(2, 8);
  return `https://meet.jit.si/opsore-demo-${slug}-${rand}`;
}

export async function POST(request) {
  try {
    const { fullName, companyName, email, phone, date, slot } =
      await request.json();

    if (!fullName || !email || !date || !slot) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const meetingLink = generateMeetingLink(fullName, date, slot);
    const prettyDate = new Date(`${date}T00:00:00`).toLocaleDateString(
      "en-IN",
      { weekday: "long", day: "numeric", month: "long", year: "numeric" }
    );

    const detailsHtml = `
      <table style="border-collapse:collapse;width:100%;max-width:480px">
        <tr><td style="padding:8px 12px;color:#64748b">Name</td><td style="padding:8px 12px;font-weight:bold">${fullName}</td></tr>
        <tr><td style="padding:8px 12px;color:#64748b">Company</td><td style="padding:8px 12px;font-weight:bold">${companyName || "—"}</td></tr>
        <tr><td style="padding:8px 12px;color:#64748b">Email</td><td style="padding:8px 12px;font-weight:bold">${email}</td></tr>
        <tr><td style="padding:8px 12px;color:#64748b">Phone</td><td style="padding:8px 12px;font-weight:bold">${phone || "—"}</td></tr>
        <tr><td style="padding:8px 12px;color:#64748b">Date</td><td style="padding:8px 12px;font-weight:bold">${prettyDate}</td></tr>
        <tr><td style="padding:8px 12px;color:#64748b">Time</td><td style="padding:8px 12px;font-weight:bold">${slot} (IST)</td></tr>
      </table>
      <p style="margin:24px 0">
        <a href="${meetingLink}" style="background:#4f46e5;color:#fff;padding:12px 24px;border-radius:12px;text-decoration:none;font-weight:bold">Join Meeting</a>
      </p>
      <p style="color:#64748b;font-size:13px">Meeting link: <a href="${meetingLink}">${meetingLink}</a></p>
    `;

    const userHtml = `
      <h2 style="font-family:sans-serif">Your OPSORE demo is booked ✅</h2>
      <p>Hi ${fullName}, your demo slot is confirmed. Details below:</p>
      ${detailsHtml}
      <p style="color:#64748b;font-size:13px">If you need to reschedule, reply to this email.</p>
    `;

    const teamHtml = `
      <h2 style="font-family:sans-serif">New Demo Booking 📅</h2>
      ${detailsHtml}
    `;

    const from = "OPSORE <demo@lalinx.com>";
    const userTo = email;
    const teamTo = "care@lalinx.com";

    const { data, error } = await resend.batch.send([
      {
        from,
        to: userTo,
        subject: `Demo Confirmed — ${prettyDate} at ${slot} (IST)`,
        html: userHtml,
      },
      {
        from,
        to: teamTo,
        replyTo: email,
        subject: `New Demo Booking — ${fullName} (${prettyDate}, ${slot} IST)`,
        html: teamHtml,
      },
    ]);

    if (error) {
      return Response.json({ error: error.message }, { status: 502 });
    }

    return Response.json({ ok: true, meetingLink, data }, { status: 200 });
  } catch (err) {
    return Response.json({ error: "Failed to book demo" }, { status: 500 });
  }
}
