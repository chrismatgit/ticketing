import request from 'supertest';
import { app } from '../../app';

it('return a 201 on successful signup', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(201);
});

it('return a 400 with an invalid email', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'joe',
      password: 'password',
    })
    .expect(400);
});

it('return a 400 with an invalid password', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'joe@test.com',
      password: 'p',
    })
    .expect(400);
});

it('return a 400 with a missing email and password', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'joe@test.com',
    })
    .expect(400);

  await request(app)
    .post('/api/users/signup')
    .send({
      password: 'joe doe',
    })
    .expect(400);
});

it('disallows duplicate emails', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'joe@test.com',
      password: 'joe doe',
    })
    .expect(201);

  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'joe@test.com',
      password: 'joe doe',
    })
    .expect(400);
});

it('set a cookie after successful signup', async () => {
  const response = await request(app)
    .post('/api/users/signup')
    .send({
      email: 'joe@test.com',
      password: 'joe doe',
    })
    .expect(201);

  expect(response.get('Set-Cookie')).toBeDefined();
});
