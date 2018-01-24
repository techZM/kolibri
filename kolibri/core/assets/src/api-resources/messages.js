import { Resource } from '../api-resource';
import client from 'node-rest-client-promise';
import cookiejs from 'js-cookie';

export default class MessageResource extends Resource {
  static resourceName() {
    return 'message';
  }

  createMessage(thread_id, msg, file) {
    var c = new client.Client();
    return c
      .postPromise(window.location.origin + '/messages/api/message/', {
        data: { thread: thread_id, message: msg, file: file },
        headers: { 'Content-Type': 'application/json', 'X-CSRFToken': cookiejs.get('csrftoken') },
      })
      .then(obj => obj.data);
  }
}
