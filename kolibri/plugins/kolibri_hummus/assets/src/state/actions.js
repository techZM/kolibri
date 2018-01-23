function showChatsPage(store) {
  store.dispatch('CORE_SET_PAGE_LOADING', true);
  console.log('in here');
  store.dispatch('CORE_SET_PAGE_LOADING', false);
}

export { showChatsPage };
