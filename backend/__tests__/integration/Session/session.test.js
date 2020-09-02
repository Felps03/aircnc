const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../../src/app');

describe('Session', () => {
  afterAll(async() => {
    mongoose.disconnect();
  });

  it('[SUCCESS] Should create a session', async (done) => {
    jest.setTimeout(10000)
    let response = await request(app).post('/sessions').send({
      email: 'felipe@gmail.com'
    });
    expect(response.statusCode).toBe(200);
    expect(response.body).not.toBeUndefined();
    done();
  });
});
