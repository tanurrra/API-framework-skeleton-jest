import { searchForUser, searchForPosts } from './helper/search'

test('can search for a posts by username', async () => {
  const userName = 'Delphine'; // TODO here for simplicity; normally should be in config
  const userSearchRes = await searchForUser(userName);
  // TODO assume only one usename found; otherwise need to iterate throuth array
  if (userSearchRes.length > 1) {
    console.log(`WARN Found ${userSearchRes.length} users for user name "${userName}". Will use the first one.`);
  }
  const userId = userSearchRes[0].id;
  const postsSearchRes = await searchForPosts(userId);
  expect(postsSearchRes.length).toBeGreaterThan(0);
  console.log(`Found ${postsSearchRes.length} posts for user "${userName}"`);
  // check all returned posts has same userId
  Object.keys(postsSearchRes).forEach(key => {
    expect(postsSearchRes[key].userId.toString()).toContain(userId.toString());
  });
});

test('can search for a posts by invalid username and get empty responce', async () => {
  const userIdDoesNotExist = '00000000000000000';
  const postsSearchRes = await searchForPosts(userIdDoesNotExist);
  expect(postsSearchRes.length).toBe(0);
});

test('can search for a posts by valid username without posts', async () => {
  const userIdNoPosts = '00000000000000000';
  const postsSearchRes = await searchForPosts(userIdNoPosts);
  expect(postsSearchRes.length).toBe(0);
});

test('can search for a posts by invalid username and get empty responce', async () => {
  const invalidUserId = 'sdf^&8&^*76';
  const postsSearchRes = await searchForPosts(invalidUserId);
  expect(postsSearchRes.length).toBe(0);
});
  // might be some more negative tests depending of AC
