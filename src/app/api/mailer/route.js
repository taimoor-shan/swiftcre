import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, company, phone, message, budget } = body;

    const msg = {
      to: 'tshanajk@gmail.com', // Change to your recipient email
      from: 'contact@swiftcre.com', // Change to your verified sender email
      subject: `New contact form submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Company: ${company}
        Phone: ${phone}
        Message: ${message}
        Budget: ${budget}
      `,
      html: `
        <p>You have a new contact form submission</p>
        <p><strong>Name: </strong> ${name}</p>
        <p><strong>Email: </strong> ${email}</p>
        <p><strong>Company: </strong> ${company}</p>
        <p><strong>Phone: </strong> ${phone}</p>
        <p><strong>Message: </strong> ${message}</p>
        <p><strong>Budget: </strong> ${budget}</p>
      `,
    };

    await sgMail.send(msg);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error in sending email:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}

export async function GET() {
  return new Response(JSON.stringify({ message: 'Mailer API is working' }), { status: 200 });
}
