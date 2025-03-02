// api/app.test.js

const request = require('supertest');
const app = require('./app'); // Your app.js file

// Test the API root route
describe('GET /', () => {
  it('should return status 200', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200); // Verify the status code is 200
  });
});

// Example for a POST request with an API key (using .env or GitHub Secrets)
describe('POST /api/some-endpoint', () => {
  it('should return status 201 for successful creation', async () => {
    const response = await request(app)
      .post('/api/some-endpoint')
      .send({
        data: 'sampleData',
      })
      .set('Authorization', `Bearer ${process.env.API_SECRET_KEY}`); // Assuming an API secret key
    expect(response.status).toBe(201);
  });
});
