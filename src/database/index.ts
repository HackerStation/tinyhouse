import { MongoClient } from 'mongodb';

const user = 'user_001';
const password = 'v6j1tuycbsbHrbTB';
const cluster = 'cluster0-wxhcr';
const url = `mongodb+srv://${user}:${password}@${cluster}.mongodb.net/test?retryWrites=true&w=majority`;

export const connectDatabase = async () => {
  const client = await MongoClient.connect(url, { useNewUrlParser: true });

  const db = client.db('main');

  return {
    listings: db.collection('test_listings')
  };
};
