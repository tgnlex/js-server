import {test, describe, it, mock, beforeEach} from 'node:test';
import assert from 'node:assert';
import request from 'supertest';
import app from '../src/server.js';
describe('Testing "/api/" endpoint.', function() {
  it('responds with expected JSON structure', function(done) {
    request(app)
      .get('/api/')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(/{"message":"hello"}/)
      .end(function(err, res) {
        if (err) throw err;
      });
  })
})
describe('Testing "/api/test" endpoint.', function() {
  it('responds with expected JSON structure', function(done) {
    request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(/{"test":"success"}/)
      .end(function(err, res) {
        if (err) throw err;
      });
  })
})
