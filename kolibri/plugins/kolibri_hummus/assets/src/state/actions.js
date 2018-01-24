import { PageNames } from '../../constants';

export function showChatsPage(store) {
  store.dispatch('CORE_SET_PAGE_LOADING', true);
  store.dispatch('SET_PAGE_NAME', PageNames.CHATS);
  store.dispatch('SET_THREADS', []);
  store.dispatch('CORE_SET_PAGE_LOADING', false);
  // find last message read
  // if exists route to that, vue router replace
}

export function openChat(store, chatId) {
  store.dispatch('CORE_SET_PAGE_LOADING', true);
  store.dispatch('SET_PAGE_NAME', PageNames.CHATS_OPEN);
  store.dispatch('SET_THREADS', []);
  store.dispatch('CORE_SET_PAGE_LOADING', false);
}

export function showAlertsPage(store) {
  store.dispatch('CORE_SET_PAGE_LOADING', true);
  store.dispatch('SET_PAGE_NAME', PageNames.ALERTS);
  store.dispatch('SET_THREADS', []);
  store.dispatch('CORE_SET_PAGE_LOADING', false);
}

export function openAlert(store, alertId) {
  store.dispatch('CORE_SET_PAGE_LOADING', true);
  store.dispatch('SET_PAGE_NAME', PageNames.ALERTS_OPEN);
  store.dispatch('SET_THREADS', []);
  store.dispatch('CORE_SET_PAGE_LOADING', false);
  // find last message read
  // if exists route to that, vue router replace
}
