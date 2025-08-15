import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "cryptonxtzimhs@gmail.com",
    pass: "vklsksfm zrbt tgyt", // Google App Password
  },
});

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      firstName,
      lastName,
      email,
      date,
      time,
      partySize,
      specialRequests,
    } = body;

    if (!firstName || !lastName || !email || !date || !time || !partySize) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
      });
    }

    console.log("New reservation received:", body);

    // Email προς εσένα (owner)
    const mailToOwner = {
      from: "cryptonxtzimhs@gmail.com",
      to: "cryptonxtzimhs@gmail.com",
      subject: "New Reservation at Baraki",
      html: `
        <h2>New Reservation</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Party Size:</strong> ${partySize}</p>
        <p><strong>Special Requests:</strong> ${specialRequests || "None"}</p>
      `,
    };

    // Email προς πελάτη (confirmation)
    const mailToClient = {
      from: "cryptonxtzimhs@gmail.com",
      to: email,
      subject: "Your Reservation Confirmation at Baraki",
      html: `
        <h2>Thank you for your reservation, ${firstName}!</h2>
        <p>We have received your booking details:</p>
        <ul>
          <li><strong>Date:</strong> ${date}</li>
          <li><strong>Time:</strong> ${time}</li>
          <li><strong>Party Size:</strong> ${partySize}</li>
          <li><strong>Special Requests:</strong> ${specialRequests || "None"}</li>
        </ul>
        <p>We look forward to welcoming you at Baraki.</p>
        <p>Best regards,<br/>Baraki Team</p>
      `,
    };

    // Στέλνουμε και τα δύο email παράλληλα
    await Promise.all([
      transporter.sendMail(mailToOwner),
      transporter.sendMail(mailToClient),
    ]);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error("Reservation error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
