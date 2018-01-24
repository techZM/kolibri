<template>

  <core-base
    :topLevelPageName="topLevelPageName"
    :appBarTitle="$tr('messages')"
  >
    <div class="content">
      <k-navbar>
        <k-navbar-link
          type="icon-and-title"
          :title="$tr('chats')"
          icon="chat"
          :link="chatsLink"
        />
        <k-navbar-link
          type="icon-and-title"
          :title="$tr('alerts')"
          icon="error"
          :link="alertsLink"
        />
      </k-navbar>

      <chats-page
        v-if="isChatsPage"
        :threads="threads"
        :currentThread="currentThread"
      />
      <alerts-page
        v-else-if="isAlertsPage"
        :threads="threads"
        :currentThread="currentThread"
      />
    </div>
  </core-base>

</template>


<script>

  import coreBase from 'kolibri.coreVue.components.coreBase';
  import kNavbar from 'kolibri.coreVue.components.kNavbar';
  import kNavbarLink from 'kolibri.coreVue.components.kNavbarLink';

  import ChatsPage from './ChatsPage';
  import AlertsPage from './AlertsPage';

  import { TopLevelPageNames } from 'kolibri.coreVue.vuex.constants';

  import { PageNames } from '../../constants';

  export default {
    name: 'messagesRoot',
    $trs: {
      messages: 'Messages',
      chats: 'Chats',
      alerts: 'Alerts',
    },
    components: {
      coreBase,
      kNavbar,
      kNavbarLink,
      ChatsPage,
      AlertsPage,
    },
    computed: {
      topLevelPageName() {
        return TopLevelPageNames.MESSAGES;
      },
      chatsLink() {
        return {
          name: PageNames.CHATS,
        };
      },
      alertsLink() {
        return {
          name: PageNames.ALERTS,
        };
      },
      isChatsPage() {
        return this.pageName === PageNames.CHATS;
      },
      isAlertsPage() {
        return this.pageName === PageNames.ALERTS;
      },
    },
    vuex: {
      getters: {
        pageName: state => state.pageName,
        threads: state => state.pageState.threads,
        currentThread: state => state.currentThread,
      },
    },
  };

</script>


<style lang="stylus" scoped>

  @require '~kolibri.styles.definitions'

  .content
    background-color: $core-bg-light
    padding: 1em

</style>
