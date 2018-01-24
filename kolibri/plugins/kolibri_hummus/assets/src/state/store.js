import { PageNames } from '../../constants';

export const initialState = {
  pageName: PageNames.CHATS,
  pageState: {
    threads: null,
    currentThread: null,
    modal: null,
    modalStep: null,
    facilityUsers: [],
  },
};

export const mutations = {
  SET_PAGE_NAME(state, name) {
    state.pageName = name;
  },
  SET_THREADS(state, threads) {
    threads.reverse();
    state.pageState.threads = threads;
  },
  SET_CURRENT_THREAD(state, currentThread) {
    state.pageState.currentThread = currentThread;
  },
  SET_MODAL(state, modal) {
    state.pageState.modal = modal;
  },
  SET_MODAL_STEP(state, modalStep) {
    state.pageState.modalStep = modalStep;
  },
  SET_FACILITY_USERS(state, facilityUsers) {
    state.pageState.facilityUsers = facilityUsers;
  },
};
