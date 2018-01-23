import RootVue from './views';
import KolibriApp from 'kolibri_app';
import { initialState, mutations } from './state/store';
import * as actions from './state/actions';
import store from 'kolibri.coreVue.vuex.store';
import { PageNames } from '../constants';

const routes = [
  {
    path: '/',
    redirect: '/chats',
  },
  {
    name: PageNames.CHATS,
    path: '/chats',
    handler: () => {
      actions.showChatsPage(store);
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
    path: '/*',
    redirect: '/chats',
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
