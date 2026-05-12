import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  console.log('Received contact form submission:', { name, email, subject, message });
  // In a real application, you would send an email or save to a database here
  res.status(200).json({ message: 'Terima kasih! Pesan Anda telah terkirim.' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
