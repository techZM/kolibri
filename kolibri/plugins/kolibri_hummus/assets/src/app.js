import RootVue from './views';


import KolibriApp from 'kolibri_app';
import { initialState, mutations } from './state/store';

const routes = [];

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
