import superagent from 'superagent';
import {globalConfig} from '../config/global.config'

// beforeEach(() => console.log('Starting test:', expect.getState().currentTestName));

test(`can search for a username "${globalConfig.validUserName}" and username is in response`, async () => {
  const userName = globalConfig.validUserName;
  const res = await superagent.get(`${globalConfig.path}/users?username=${userName}`);
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
  const res = await superagent.get(`${globalConfig.path}/users?username=${InvalidUserName}`);
  expect(res.status).toBe(200);
  console.log(`Found ${res.body.length} users for user name "${InvalidUserName}"`);
    expect(res.body.length).toBe(0);
});

