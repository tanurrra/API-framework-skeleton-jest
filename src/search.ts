import superagent from 'superagent';

const endpointUsers = 'https://jsonplaceholder.typicode.com/users';
const endpointPosts = 'https://jsonplaceholder.typicode.com/posts';
const endpointComments = 'https://jsonplaceholder.typicode.com/comments';

export async function searchForUser(userName) {
  try {
    // expect.assertions(1);
    const res = await superagent.get(`${endpointUsers}?username=${userName}`);
    expect(res.status).toBe(200);
    return res.body;
  } catch (err) {
    console.error(err);
  }
}

export async function searchForPosts(userId) {
  try {
    // expect.assertions(1);
    const res = await superagent.get(`${endpointPosts}?userId=${userId}`);
    expect(res.status).toBe(200);
    return res.body;
  } catch (err) {
    console.error(err);
  }
}

export async function searchForComments(postId) {
  try {
    // expect.assertions(1);
    const res = await superagent.get(`${endpointComments}?postId=${postId}`);
    expect(res.status).toBe(200);
    return res.body;
  } catch (err) {
    console.error(err);
  }
}
