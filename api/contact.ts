import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'La Veranda <onboarding@resend.dev>', // You should use your own domain on Resend
      to: ['laverandadasimona@gmail.com'],
      reply_to: email,
      subject: `[Sito Web] ${subject}: ${name}`,
      text: `Hai ricevuto un nuovo messaggio dal sito web:\n\nNome: ${name}\nEmail: ${email}\nOggetto: ${subject}\n\nMessaggio:\n${message}`,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
