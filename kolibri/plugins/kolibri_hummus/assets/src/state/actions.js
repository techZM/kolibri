import { PageNames } from '../../constants';

export function showChatsPage(store) {
  store.dispatch('CORE_SET_PAGE_LOADING', true);
  store.dispatch('SET_PAGE_NAME', PageNames.CHATS);
  const dummyThreads = [
    {
      id: '1',
      creator: 'bob',
      title: 'This is a new message',
      participants: ['bob', 'tommy'],
      messages: [{}, {}],
      unread_count: 2,
    },
  ];
  store.dispatch('SET_THREADS', dummyThreads);
  store.dispatch('CORE_SET_PAGE_LOADING', false);
  // find last message read
  // if exists route to that, vue router replace
}

export function openChat(store, chatId) {
  store.dispatch('CORE_SET_PAGE_LOADING', true);
  store.dispatch('SET_PAGE_NAME', PageNames.CHATS_OPEN);
  const dummyThreads = [];
  store.dispatch('SET_THREADS', dummyThreads);
  const dummyCurrentThread = {};
  store.dispatch('SET_CURRENT_THREAD', dummyCurrentThread);
  store.dispatch('CORE_SET_PAGE_LOADING', false);
}

export function showAlertsPage(store) {
  store.dispatch('CORE_SET_PAGE_LOADING', true);
  store.dispatch('SET_PAGE_NAME', PageNames.ALERTS);
  const dummyThreads = [];
  store.dispatch('SET_THREADS', dummyThreads);
  store.dispatch('CORE_SET_PAGE_LOADING', false);
}

export function openAlert(store, alertId) {
  store.dispatch('CORE_SET_PAGE_LOADING', true);
  store.dispatch('SET_PAGE_NAME', PageNames.ALERTS_OPEN);
  const dummyThreads = [];
  store.dispatch('SET_THREADS', dummyThreads);
  const dummyCurrentThread = {};
  store.dispatch('SET_CURRENT_THREAD', dummyCurrentThread);
  store.dispatch('CORE_SET_PAGE_LOADING', false);
  // find last message read
  // if exists route to that, vue router replace
}
