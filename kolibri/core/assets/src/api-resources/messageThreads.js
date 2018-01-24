import { Resource } from '../api-resource';

import Client from 'node-rest-client';
import cookiejs from 'js-cookie';

export default class MessageThreadResource extends Resource {
  static resourceName() {
    return 'testing';
  }

  createMessageThread(title, participants) {
    var client = new Client.Client();
    client.post(window.location.origin + '/messages/api/threads/', {
      data: { title: title, participants: participants, messages: [] },
      headers: { 'Content-Type': 'application/json', 'X-CSRFToken': cookiejs.get('csrftoken') },
    });
    return 'testing';
  }
}
