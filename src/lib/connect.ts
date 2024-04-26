
import PocketBase from 'pocketbase';
const pbClient = new PocketBase('http://127.0.0.1:8090');
export async function getTodos(){
    const articles =await pbClient.collection('blogs').getFullList(200 /* batch size */, {
      sort: '-created',
    });
    return articles;
};