import superagent from 'superagent';
import {path, endpointUsers, endpointPosts, endpointComments} from '../helper/test.config';

export async function searchForUser(userName) {
  try {
    const res = await superagent.get(`${path}${endpointUsers}?username=${userName}`);
    expect(res.status).toBe(200);
    return res.body;
  } catch (err) {
    console.error(err);
  }
}

export async function searchForPosts(userId) {
  try {
    const res = await superagent.get(`${path}${endpointPosts}?userId=${userId}`);
    expect(res.status).toBe(200);
    return res.body;
  } catch (err) {
    console.error(err);
  }
}

export async function searchForComments(postId) {
  try {
    const res = await superagent.get(`${path}${endpointComments}?postId=${postId}`);
    expect(res.status).toBe(200);
    return res.body;
  } catch (err) {
    console.error(err);
  }
}
