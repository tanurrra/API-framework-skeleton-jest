import superagent from 'superagent';
import {path, endpointUsers} from './helper/test.config';

// const endpointUsers = 'https://jsonplaceholder.typicode.com/users';

test('can search for a username and username is in response', async () => {
  const userName = 'Delphine'; // TODO here for simplicity; normally should be in config
  const res = await superagent.get(`${path}${endpointUsers}?username=${userName}`);
  expect(res.status).toBe(200);
  console.log(`Found ${res.body.length} users for user name "${userName}"`);
  Object.keys(res.body).forEach(key => {
    expect(res.body[key].username).toContain(userName);
  });
});

test('can search for an invalid username and get empty responce', async () => {
  // might be some more negative tests if not all characters are allowed in userName or other fields
  // or request might be too long
  const InvalidUserName = 'InvalidUserName'; 
  const res = await superagent.get(`${path}${endpointUsers}?username=${InvalidUserName}`);
  expect(res.status).toBe(200);
  console.log(`Found ${res.body.length} users for user name "${InvalidUserName}"`);
    expect(res.body.length).toBe(0);
});

