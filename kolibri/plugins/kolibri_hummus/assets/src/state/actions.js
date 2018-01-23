import { PageNames } from '../../constants';

export function showChatsPage(store) {
  store.dispatch('SET_PAGE_NAME', PageNames.CHATS);
  store.dispatch('CORE_SET_PAGE_LOADING', false);
}

export function showAlertsPage(store) {
  store.dispatch('SET_PAGE_NAME', PageNames.ALERTS);
  store.dispatch('CORE_SET_PAGE_LOADING', false);
}
