import { PageNames, MODALS, NEW_CHAT_MODAL_STEPS } from '../../constants';
import { FacilityUserResource, MessageThreadResource, MessageResource } from 'kolibri.resources';
import ConditionalPromise from 'kolibri.lib.conditionalPromise';
import { samePageCheckGenerator } from 'kolibri.coreVue.vuex.actions';
import router from 'kolibri.coreVue.router';

export function showChatsPage(store) {
  store.dispatch('SET_MODAL', null);
  store.dispatch('CORE_SET_PAGE_LOADING', true);
  store.dispatch('SET_PAGE_NAME', PageNames.CHATS);

  const facilityUsersPromise = FacilityUserResource.getCollection().fetch({}, true);
  const messageThreadsPromise = MessageThreadResource.listAllMessageThreads();
  const promises = [facilityUsersPromise, messageThreadsPromise];

  ConditionalPromise.all(promises).only(
    samePageCheckGenerator(store),
    ([facilityUsers, messageThreads]) => {
      store.dispatch('SET_FACILITY_USERS', facilityUsers);
      store.dispatch('SET_THREADS', messageThreads);
      store.dispatch('CORE_SET_PAGE_LOADING', false);
    }
  );
}

export function openChat(store, chatId) {
  store.dispatch('SET_MODAL', null);
  store.dispatch('CORE_SET_PAGE_LOADING', true);
  store.dispatch('SET_PAGE_NAME', PageNames.CHATS_OPEN);

  const facilityUsersPromise = FacilityUserResource.getCollection().fetch({}, true);
  const messageThreadsPromise = MessageThreadResource.listAllMessageThreads();
  const currentThreadPromise = MessageThreadResource.getMessageThreadDetails(chatId);
  const promises = [facilityUsersPromise, messageThreadsPromise, currentThreadPromise];

  ConditionalPromise.all(promises).only(
    samePageCheckGenerator(store),
    ([facilityUsers, messageThreads, currentThread]) => {
      store.dispatch('SET_FACILITY_USERS', facilityUsers);
      store.dispatch('SET_THREADS', messageThreads);
      store.dispatch('SET_CURRENT_THREAD', currentThread);
      store.dispatch('CORE_SET_PAGE_LOADING', false);
    }
  );
}

export function openNewChat(store) {
  store.dispatch('CORE_SET_PAGE_LOADING', true);
  store.dispatch('SET_MODAL', MODALS.NEW_CHAT);
  store.dispatch('SET_MODAL_STEP', NEW_CHAT_MODAL_STEPS.DIRECT);
  store.dispatch('CORE_SET_PAGE_LOADING', false);
}

export function openNewGroupChat(store) {
  store.dispatch('CORE_SET_PAGE_LOADING', true);
  store.dispatch('SET_MODAL', MODALS.NEW_CHAT);
  store.dispatch('SET_MODAL_STEP', NEW_CHAT_MODAL_STEPS.GROUP);
  store.dispatch('CORE_SET_PAGE_LOADING', false);
}

export function closeModal(store) {
  store.dispatch('CORE_SET_PAGE_LOADING', true);
  store.dispatch('SET_MODAL', null);
  store.dispatch('CORE_SET_PAGE_LOADING', false);
}

export function createThread(store, title, userIds) {
  store.dispatch('CORE_SET_PAGE_LOADING', true);
  MessageThreadResource.createMessageThread(title, userIds).then(thread => {
    router.getInstance().push({
      name: PageNames.CHATS_OPEN,
      params: {
        chatId: thread.id,
      },
    });
    store.dispatch('CORE_SET_PAGE_LOADING', false);
  });
}

export function sendMessage(store, threadId, text) {
  store.dispatch('CORE_SET_PAGE_LOADING', true);
  MessageResource.createMessage(threadId, text).then(message => {
    const updatedCurrentThread = store.state.pageState.currentThread;
    message.senderinfo = store.state.core.session;
    updatedCurrentThread.messages.push(message);
    store.dispatch('SET_CURRENT_THREAD', updatedCurrentThread);
    store.dispatch('CORE_SET_PAGE_LOADING', false);
  });
}

export function showAlertsPage(store) {
  store.dispatch('CORE_SET_PAGE_LOADING', true);
  store.dispatch('SET_PAGE_NAME', PageNames.ALERTS);
  const dummyThreads = [
    {
      id: 'cb3dd58d6cdf44aca1ee50180b2115ed',
      creator: '1e96a0124f4352e8a01d1f9e0c5d3d20',
      title: 'no classes tomorrow',
      deleted: false,
      participants: [
        '1e96a0124f4352e8a01d1f9e0c5d3d20',
        'ec8fb0259293ac3acf74162e02d927f5',
        '996c671df343aa8483ad4f05c6d46c1b',
      ],
      messages: [
        {
          id: 'bab4589db0224eaeaa16bb94595135d7',
          message: "Don't come to school",
          sentTime: '2018-01-23T22:30:53.983114-08:00',
          opened: true,
          file: null,
          thread: 'cb3dd58d6cdf44aca1ee50180b2115ed',
          senderinfo: {
            username: 'bob',
            id: '1e96a0124f4352e8a01d1f9e0c5d3d20',
            full_name: 'bob a',
          },
        },
      ],
      unread_count: 0,
    },
    {
      id: '50fde30374e842fbaf91ac8cc215ef78',
      creator: '1e96a0124f4352e8a01d1f9e0c5d3d20',
      title: 'hackathon today',
      deleted: false,
      participants: [
        '1e96a0124f4352e8a01d1f9e0c5d3d20',
        'ec8fb0259293ac3acf74162e02d927f5',
        '996c671df343aa8483ad4f05c6d46c1b',
      ],
      messages: [
        {
          id: '3047280e2b464d35baabf6df235101f8',
          message: 'Yay',
          sentTime: '2018-01-24T00:40:58.273444-08:00',
          opened: true,
          file: null,
          thread: '50fde30374e842fbaf91ac8cc215ef78',
          senderinfo: {
            username: 'bob',
            id: '1e96a0124f4352e8a01d1f9e0c5d3d20',
            full_name: 'bob a',
          },
        },
      ],
      unread_count: 0,
    },
  ];
  store.dispatch('SET_THREADS', dummyThreads);
  store.dispatch('CORE_SET_PAGE_LOADING', false);
}

export function openAlert(store, alertId) {
  store.dispatch('CORE_SET_PAGE_LOADING', true);
  store.dispatch('SET_PAGE_NAME', PageNames.ALERTS_OPEN);
  const dummyThreads = [
    {
      id: 'cb3dd58d6cdf44aca1ee50180b2115ed',
      creator: '1e96a0124f4352e8a01d1f9e0c5d3d20',
      title: 'no classes tomorrow',
      deleted: false,
      participants: [
        '1e96a0124f4352e8a01d1f9e0c5d3d20',
        'ec8fb0259293ac3acf74162e02d927f5',
        '996c671df343aa8483ad4f05c6d46c1b',
      ],
      messages: [
        {
          id: 'bab4589db0224eaeaa16bb94595135d7',
          message: "Don't come to school",
          sentTime: '2018-01-23T22:30:53.983114-08:00',
          opened: true,
          file: null,
          thread: 'cb3dd58d6cdf44aca1ee50180b2115ed',
          senderinfo: {
            username: 'bob',
            id: '1e96a0124f4352e8a01d1f9e0c5d3d20',
            full_name: 'bob a',
          },
        },
      ],
      unread_count: 0,
    },
    {
      id: '50fde30374e842fbaf91ac8cc215ef78',
      creator: '1e96a0124f4352e8a01d1f9e0c5d3d20',
      title: 'hackathon today',
      deleted: false,
      participants: [
        '1e96a0124f4352e8a01d1f9e0c5d3d20',
        'ec8fb0259293ac3acf74162e02d927f5',
        '996c671df343aa8483ad4f05c6d46c1b',
      ],
      messages: [
        {
          id: '3047280e2b464d35baabf6df235101f8',
          message: 'Yay',
          sentTime: '2018-01-24T00:40:58.273444-08:00',
          opened: true,
          file: null,
          thread: '50fde30374e842fbaf91ac8cc215ef78',
          senderinfo: {
            username: 'bob',
            id: '1e96a0124f4352e8a01d1f9e0c5d3d20',
            full_name: 'bob a',
          },
        },
      ],
      unread_count: 0,
    },
  ];
  store.dispatch('SET_THREADS', dummyThreads);
  const dummyCurrentThread = {
    id: alertId,
    creator: '1e96a0124f4352e8a01d1f9e0c5d3d20',
    title: 'hackathon today',
    deleted: false,
    participants: [
      '1e96a0124f4352e8a01d1f9e0c5d3d20',
      'ec8fb0259293ac3acf74162e02d927f5',
      '996c671df343aa8483ad4f05c6d46c1b',
    ],
    messages: [
      {
        id: '3047280e2b464d35baabf6df235101f8',
        message: 'Yay',
        sentTime: '2018-01-24T00:40:58.273444-08:00',
        opened: true,
        file: null,
        thread: '50fde30374e842fbaf91ac8cc215ef78',
        senderinfo: {
          username: 'bob',
          id: '1e96a0124f4352e8a01d1f9e0c5d3d20',
          full_name: 'bob a',
        },
      },
    ],
    unread_count: 0,
  };
  store.dispatch('SET_CURRENT_THREAD', dummyCurrentThread);
  store.dispatch('CORE_SET_PAGE_LOADING', false);
  // find last message read
  // if exists route to that, vue router replace
}
