import bcrypt from 'bcrypt';
import { connection } from '../database.js';

export async function createShorter(req, res) {
  const {url} = req.body;
  try {
    const shortUrl = {shortUrl:(Math.round(Date.now()/1000)).toString(16) }
    return res.send(shortUrl).status(201)
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}
