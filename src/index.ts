import express from 'express';
import bodyParser from 'body-parser';
import { listings } from './listings';

const app = express();
const PORT = 9000;

app.use(bodyParser.json());

app.get('/listings', (_req, res) => {
  return res.send(listings);
});

app.post('/delete-listing', (req, res) => {
  const id: string = req.body.id;

  listings.forEach((listing, idx) => {
    if (listing.id === id) {
      return res.send(listings.splice(idx, 1));
    }
  });

  return res.send('failed to delete listing');
});

app.listen(PORT);

console.log(`[app]: http://localhost:${PORT}`);
