<template>

  <div>
    <k-button
      text="New chat"
      @click="openNewChat"
      :primary="true"
    />

    <new-chat v-if="showNewChat" />

    <messages-container
      :threads="threads"
      :currentThread="currentThread"
    />
  </div>

</template>


<script>

  import MessagesContainer from './MessagesContainer';
  import kButton from 'kolibri.coreVue.components.kButton';
  import { openNewChat } from '../state/actions';
  import { MODALS } from '../../constants';
  import NewChat from './NewChat';

  export default {
    name: 'ChatsPage',
    components: {
      MessagesContainer,
      kButton,
      NewChat,
    },
    props: {
      threads: {
        type: Array,
        required: true,
      },
      currentThread: {
        type: Object,
        required: false,
      }
    },
    computed: {
      showNewChat() {
        return this.modal === MODALS.NEW_CHAT;
      }
    },
    vuex: {
      actions: {
        openNewChat,
      },
      getters: {
        modal: state => state.pageState.modal,
      }
    },
  };

</script>


<style lang="stylus" scoped>

  @require '~kolibri.styles.definitions'

</style>
