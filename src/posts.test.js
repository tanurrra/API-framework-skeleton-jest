import { globalConfig } from '../config/global.config';
import { searchForUser, searchForPosts } from './helper/search'

// beforeEach(() => console.log('Starting test:', expect.getState().currentTestName));

test(`can search for a posts by username="${globalConfig.validUserName}"`, async () => {
  const userName = globalConfig.validUserName;
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

test(`can search for a posts by invalid username="${globalConfig.userIdDoesNotExist}" and get empty responce`, async () => {
  const userIdDoesNotExist = globalConfig.userIdDoesNotExist;
  const postsSearchRes = await searchForPosts(userIdDoesNotExist);
  expect(postsSearchRes.length).toBe(0);
});

test('can search for a posts by valid username without posts', async () => {
  const userIdNoPosts = '00000000000000000';
  const postsSearchRes = await searchForPosts(userIdNoPosts);
  expect(postsSearchRes.length).toBe(0);
});

test(`can search for a posts by invalid username=${globalConfig.invalidUserId} and get empty responce`, async () => {
  const invalidUserId = globalConfig.invalidUserId;
  const postsSearchRes = await searchForPosts(invalidUserId);
  expect(postsSearchRes.length).toBe(0);
});
  // might be some more negative tests depending of AC
