/* eslint-disable no-undef */
const request = require('request');

const baseUrl = 'http://localhost:3030/';

describe(`route ${baseUrl}`, () => {
  it('should return response with status code 200', (done) => {
    request.get(baseUrl, (error, response) => {
      expect(error).toBeNull();
      expect(response.statusCode).toEqual(200);
      done();
    });
  });
});
