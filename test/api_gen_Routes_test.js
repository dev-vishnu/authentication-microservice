import request from 'supertest';
import app from '../src/authServer';


describe('testing /apiKeyGen route', () => {
  it('testing API key generator route', (done) => {
    request(app).get('/getApiKey?app_name=hello')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .end(done);
  });
});
