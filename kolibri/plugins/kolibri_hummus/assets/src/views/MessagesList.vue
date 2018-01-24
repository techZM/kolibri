<template>

  <div class="messages-list">
    <div v-if="!threads.length">
      No chats :(
    </div>
    <messages-list-item
      v-else
      v-for="thread in threads"
      :key="thread.id"
      :heading="thread.heading"
      :body="thread.body"
    />
  </div>

</template>


<script>

  import MessagesListItem from './MessagesListItem';

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
