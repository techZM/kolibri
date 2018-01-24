<template>

  <div class="messages-thread">
    <div v-if="!currentThread">
      No thread selected :(
    </div>
    <template
      v-else
    >
      <div class="messages-thread-header">
        {{ currentThread.title }}
      </div>

      <div class="messages-thread-body">
        <p v-if="!currentThread.messages.length">
          No messages. Send a new message! :D
        </p>
        <messages-thread-item
          v-for="message in currentThread.messages"
          :key="message.id"
          :text="message.message"
          :date="message.sentTime"
          :senderUsername="message.senderinfo.username"
          :senderFullname="message.senderinfo.full_name"
          :senderId="message.senderinfo.id"
          :recipientId="recipientId"
        />
      </div>

      <form class="messages-thread-input" @submit.prevent="sendNewMessage">
        <k-textbox
          v-model="message"
          label="Message"
          class="message-textbox"
        />
        <k-button
          text="Send"
          :primary="true"
          :disabled="message === ''"
          type="submit"
        />
      </form>


    </template>

  </div>

</template>


<script>

  import kTextbox from 'kolibri.coreVue.components.kTextbox';
  import kButton from 'kolibri.coreVue.components.kButton';
  import MessagesThreadItem from './MessagesThreadItem';
  import { sendMessage } from '../state/actions';

  export default {
    name: 'MessagesThread',
    components: {
      MessagesThreadItem,
      kTextbox,
      kButton,
    },
    props: {
      currentThread: {
        type: Object,
        required: false,
      },
    },
    data() {
      return {
        message: '',
      };
    },
    methods: {
      sendNewMessage() {
        this.sendMessage(this.threadId, this.message);
      }
    },
    vuex: {
      getters: {
        recipientId: state => state.core.session.user_id,
        threadId: state => state.pageState.currentThread.id,
      },
      actions: {
        sendMessage,
      },
    },
  };

</script>


<style lang="stylus" scoped>

  @require '~kolibri.styles.definitions'

  .messages-thread
    width: 420px
    height: 100%
    display: inline-block
    vertical-align: top
    position: relative

  .messages-thread-header
    height: 48px

  .messages-thread-body
    position: absolute
    top: 48px
    bottom: 72px
    left: 0
    right: 0
    overflow-y: scroll

  .messages-thread-input
    height: 72px
    position: absolute
    bottom: 0
    left: 0
    right:0

  .message-textbox
    display: inline-block
    vertical-align: middle

</style>
