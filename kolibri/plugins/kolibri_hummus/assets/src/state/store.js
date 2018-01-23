import { PageNames } from '../../constants';

export const initialState = {
  pageName: PageNames.CHATS,
  pageState: {},
};

export const mutations = {
  SET_PAGE_NAME(state, name) {
    state.pageName = name;
  },
};
