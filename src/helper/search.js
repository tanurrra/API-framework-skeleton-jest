import superagent from 'superagent';
import {globalConfig} from '../../config/global.config'

export async function searchForUser(userName) {
  try {
    const res = await superagent.get(`${globalConfig.path}/users?username=${userName}`);
    expect(res.status).toBe(200);
    return res.body;
  } catch (err) {
    console.error(err);
  }
}

export async function searchForPosts(userId) {
  try {
    const res = await superagent.get(`${globalConfig.path}/posts?userId=${userId}`);
    expect(res.status).toBe(200);
    return res.body;
  } catch (err) {
    console.error(err);
  }
}

export async function searchForComments(postId) {
  try {
    const res = await superagent.get(`${globalConfig.path}/comments?postId=${postId}`);
    expect(res.status).toBe(200);
    return res.body;
  } catch (err) {
    console.error(err);
  }
}
