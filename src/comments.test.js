import { searchForUser, searchForPosts, searchForComments } from './search'

const emailRegex = /\S+@\S+\.\S+/; // it's simple validation; might be adjusted according to requirements

test('all comments of specific post have correct postId', async () => {
    const postId = '81'; // TODO here for simplicity; normally should be in config
    const commentsSearchRes = await searchForComments(postId);
    // check all returned comments has same postId
    Object.keys(commentsSearchRes).forEach(key => {
        expect(commentsSearchRes[key].postId.toString()).toContain(postId.toString());
    });
});

test('email format in comments of specific post is correct', async () => {
    const postId = '81'; // TODO here for simplicity; normally should be in config
    const commentsSearchRes = await searchForComments(postId);
    for (let commentIndex = 0; commentIndex <= commentsSearchRes.length - 1; commentIndex++) {
        expect(emailRegex.test(String(commentsSearchRes[commentIndex].email))).toBe.true;
    }
});

test('emails in comments of the post of specific user are in proper format', async () => {
    const userName = 'Delphine'; // TODO here for simplicity; normally should be in config

    const userSearchRes = await searchForUser(userName);
    if (userSearchRes.length > 1) {
        console.log(`WARN Found ${userSearchRes.length} users for user name "${userName}". Will use the first one.`);
    }
    const userId = userSearchRes[0].id;
    const postsSearchRes = await searchForPosts(userId);
    expect(postsSearchRes.length).toBeGreaterThan(0);
    console.log(`Found ${postsSearchRes.length} posts for user "${userName}"`);
    // TODO get array of post IDs
    // could cause a bad performance on real data
    const postId = [postsSearchRes[0].id, postsSearchRes[1].id];

    let commentsSearchRes;
    for (let postIndex = 0; postIndex <= postId.length - 1; postIndex++) {
        // find all comments of postID[postNum]
        commentsSearchRes = await searchForComments(postId[postIndex]);
        for (let commentIndex = 0; commentIndex <= commentsSearchRes.length - 1; commentIndex++) {
            // check format of email in each comment
            expect(emailRegex.test(String(commentsSearchRes[commentIndex].email))).toBe.true;
        }
    }
});
