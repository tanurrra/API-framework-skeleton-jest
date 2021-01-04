import { globalConfig } from '../config/global.config';
import { searchForUser, searchForPosts, searchForComments } from './helper/search'

const emailRegex = /\S+@\S+\.\S+/; // it's simple validation; might be adjusted according to requirements

// beforeEach(() => console.log('Starting test:', expect.getState().currentTestName));

describe('Comments endpoint', () => {
    test(`all comments of post with ID=${globalConfig.validpostId} have correct postId`, async () => {
        const postId = globalConfig.validpostId;
        const commentsSearchRes = await searchForComments(postId);
        // check all returned comments has same postId
        Object.keys(commentsSearchRes).forEach(key => {
            expect(commentsSearchRes[key].postId.toString()).toContain(postId.toString());
        });
    });
    
    test(`email format in comments of post with ID=${globalConfig.validpostId} is correct`, async () => {
        const postId = globalConfig.validpostId;
        const commentsSearchRes = await searchForComments(postId);
        for (let commentIndex = 0; commentIndex <= commentsSearchRes.length - 1; commentIndex++) {
            expect(emailRegex.test(String(commentsSearchRes[commentIndex].email))).toBe.true;
        }
    });
    
    test(`emails in comments of the post of user ${globalConfig.validUserName} are in proper format`, async () => {
        const userName = globalConfig.validUserName;
        const userSearchRes = await searchForUser(userName);
        if (userSearchRes.length > 1) {
            console.log(`WARN Found ${userSearchRes.length} users for user name "${userName}". Will use the first one.`);
        }
        const userId = userSearchRes[0].id;
        const postsSearchRes = await searchForPosts(userId);
        expect(postsSearchRes.length).toBeGreaterThan(0);
        // TODO get array of post IDs
        // could cause a bad performance on real data; would like to discuss a need of this check.
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
    
    test(`specific post with ID=${globalConfig.postIdWithoutComment} does not have any comments`, async () => {
        const postIdWithoutComments = globalConfig.postIdWithoutComments;
        const commentsSearchRes = await searchForComments(postIdWithoutComments);
        // check no comments returned
        expect(commentsSearchRes.length).toBe(0);
    });
});