import { Router } from 'express';

const home = Router();

home.get('/', (req, res) => {
  res.render('home');
});

home.get('/home', (req, res) => {
  res.render('home');
});
export default home;
