import { searchForUser, searchForPosts } from './search'

test('can search for a post by username', async () => {
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
