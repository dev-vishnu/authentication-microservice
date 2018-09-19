import request from 'supertest';
import app from '../src/authServer';

describe('Testing Auth Routes ', () => {
  xit('testing register route with a new user', (done) => {
    request(app).post('/register')
      .send({ username: 'xxxx', password: 'xyz', token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZpc2hudSIsImlhdCI6MTUzNzI2NzAyMH0.kMkgO4xG7nLYbVQK02ThpBQACGGmM5zzqroI6Wukn7Q' })
      .expect(200)
      .expect((res) => {
        res.data = 'xxxx';
      })
      .end(done);
  });
  it('testing register route with correct a existing user', (done) => {
    request(app).post('/register')
      .send({ username: 'vishnu', password: 'xyz', token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZpc2hudSIsImlhdCI6MTUzNzI2NzAyMH0.kMkgO4xG7nLYbVQK02ThpBQACGGmM5zzqroI6Wukn7Q' })
      .expect(200)
      .expect((res) => {
        res.data = false;
      })
      .end(done);
  });
  it('testing login route with correct  user', (done) => {
    request(app).post('/login')
      .send({ username: 'vishnu', password: 'vishnu', token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZpc2hudSIsImlhdCI6MTUzNzI2NzAyMH0.kMkgO4xG7nLYbVQK02ThpBQACGGmM5zzqroI6Wukn7Q' })
      .expect(200)
      .expect((res) => {
        res.data = 'vishnu';
      })
      .end(done);
  });
  it('testing login route with incorrect user', (done) => {
    request(app).post('/login')
      .send({ username: 'zyx', password: 'xyz', token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InZpc2hudSIsImlhdCI6MTUzNzI2NzAyMH0.kMkgO4xG7nLYbVQK02ThpBQACGGmM5zzqroI6Wukn7Q' })
      .expect(200)
      .expect((res) => {
        res.data = false;
      })
      .end(done);
  });
  it('testing register route with correct a new user without token', (done) => {
    request(app).post('/register')
      .send({ username: 'xxxx', password: 'xyz' })
      .expect(401)
      .end(done);
  });
  it('testing register route with correct a existing user without token', (done) => {
    request(app).post('/register')
      .send({ username: 'vishnu', password: 'xyz' })
      .expect(401)
      .end(done);
  });
  it('testing login route with correct  user without token', (done) => {
    request(app).post('/login')
      .send({ username: 'vishnu', password: 'vishnu' })
      .expect(401)
      .end(done);
  });
  it('testing login route with incorrect user without token', (done) => {
    request(app).post('/login')
      .send({ username: 'zyx', password: 'xyz' })
      .expect(401)
      .end(done);
  });
});

describe('testing /home route', () => {
  it('testing API home page', (done) => {
    request(app).get('/home')
      .expect(200)
      .end(done);
  });
});
