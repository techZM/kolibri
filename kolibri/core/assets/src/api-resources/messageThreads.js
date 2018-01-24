import { Resource } from '../api-resource';

import Client from 'node-rest-client-promise';
import cookiejs from 'js-cookie';

export default class MessageThreadResource extends Resource {
  static resourceName() {
    return 'testing';
  }

  createMessageThread(title, participants) {
    var client = new Client.Client();
    return client
      .postPromise(window.location.origin + '/messages/api/threads/', {
        data: { title: title, participants: participants, messages: [] },
        headers: { 'Content-Type': 'application/json', 'X-CSRFToken': cookiejs.get('csrftoken') },
      })
      .then(obj => obj.data);
  }

  listAllMessageThreads() {
    var client = new Client.Client();
    return client
      .getPromise(window.location.origin + '/messages/api/threads')
      .then(obj => obj.data);
  }
}
