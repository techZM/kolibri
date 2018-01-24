<template>

  <div class="messages-list">
    <div v-if="!threads.length">
      No chats :(
    </div>
    <messages-list-item
      v-else
      v-for="thread in threads"
      :key="thread.id"
      :heading="thread.title"
      :body="getLastMessage(thread.messages)"
      :id="thread.id"
      :kind="calcKind(thread.participants.length)"
    />
  </div>

</template>


<script>

  import MessagesListItem from './MessagesListItem';
  import { ICON_KINDS } from '../../constants';

  export default {
    name: 'MessagesList',
    components: {
      MessagesListItem,
    },
    props: {
      threads: {
        type: Array,
        required: true,
      },
    },
    methods: {
      calcKind(numParticipants) {
        if (numParticipants > 2) {
          return ICON_KINDS.GROUP;
        }
        return ICON_KINDS.USER;
      },
      getLastMessage(messages) {
        if (!messages.length) {
          return 'No messages';
        }
        return messages[0].message;
      }
    },
  };

</script>


<style lang="stylus" scoped>

  @require '~kolibri.styles.definitions'

  .messages-list
    width: 250px
    height: 100%
    overflow-y: scroll
    display: inline-block

</style>
