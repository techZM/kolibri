import RootVue from './views';
import KolibriApp from 'kolibri_app';
import { initialState, mutations } from './state/store';
import * as actions from './state/actions';
import store from 'kolibri.coreVue.vuex.store';
import { PageNames } from '../constants';

const routes = [
  {
    path: '/',
    redirect: {
      name: PageNames.CHATS,
    },
  },
  {
    name: PageNames.CHATS,
    path: '/chats',
    handler: () => {
      actions.showChatsPage(store);
    },
  },
  {
    name: PageNames.CHATS_OPEN,
    path: '/chats/:chatId',
    handler: toRoute => {
      actions.openChat(store, toRoute.params.chatId);
    },
  },
  {
    name: PageNames.ALERTS,
    path: '/alerts',
    handler: () => {
      actions.showAlertsPage(store);
    },
  },
  {
    name: PageNames.ALERTS_OPEN,
    path: '/alerts/:alertId',
    handler: toRoute => {
      actions.openAlert(store, toRoute.params.alertId);
    },
  },
  {
    path: '/*',
    redirect: {
      name: PageNames.CHATS,
    },
  },
];

class HummusModule extends KolibriApp {
  get stateSetters() {
    return [];
  }
  get routes() {
    return routes;
  }
  get RootVue() {
    return RootVue;
  }
  get initialState() {
    return initialState;
  }
  get mutations() {
    return mutations;
  }
}

const hummus = new HummusModule();

export { hummus as default };
