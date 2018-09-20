import { expect as expected } from 'chai';
import { registerUser, userValidation } from '../src/controller/auth_controller';
import authDB from '../src/Config/authDb';

describe('Testing auth Controllers', () => {
  after(async () => {
    const dbo = await authDB.authDB();
    dbo.collection('users').drop();
  });
  it('testing register user controller with new user', async () => {
    const user = { username: 'mountblue', password: 'hello' };
    const expectedValue = 'mountblue';
    const result = await registerUser(user);
    expected(expectedValue).deep.equal(result);
  });
  it('testing register user controller with existing user', async () => {
    const user = { username: 'mountblue', password: 'hello' };
    const expectedValue = false;
    const result = await registerUser(user);
    expected(expectedValue).deep.equal(result);
  });
  it('testing login user controller with correct credentials', async () => {
    const user = { username: 'mountblue', password: 'hello' };
    const expectedValue = 'mountblue';
    const result = await userValidation(user);
    expected(expectedValue).deep.equal(result);
  });
  it('testing login user controller with incorrect credentials', async () => {
    const user = { username: 'vishnu', password: 'cvb' };
    const expectedValue = false;
    const result = await userValidation(user);
    expected(expectedValue).deep.equal(result);
  });
});
