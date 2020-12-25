import superagent from 'superagent';

const endpointUsers = 'https://jsonplaceholder.typicode.com/users';

test('can search for a username and username is in response async', async () => {
  const userName = 'Delphine'; // TODO here for simplicity; normally should be in config
  const res = await superagent.get(`${endpointUsers}?username=${userName}`);
  expect(res.status).toBe(200);
  console.log(`Found ${res.body.length} users for user name "${userName}"`);
  Object.keys(res.body).forEach(key => {
    expect(res.body[key].username).toContain(userName);
  });
  return res.body;
});

// same test but without async-await
// test('GET search for a username and username is in response', () => {
//   const userName = 'Delphine';
//   return superagent.get(`${endpointUsers}?username=${userName}`)
//     .then((res) => {
//       expect(res.status).toBe(200);
//       // check username is in the response;
//       console.log(`Found ${res.body.length} users for user name "${userName}"`);
//       Object.keys(res.body).forEach(key => {
//         expect(res.body[key].username).toContain(userName);
//       })
//     })
// });
