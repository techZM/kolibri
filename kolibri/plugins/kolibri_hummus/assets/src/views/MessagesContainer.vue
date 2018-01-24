<template>

  <div class="messages-container">
    <messages-list :threads="threads" />
    <messages-thread :currentThread="currentThread" />
  </div>

</template>


<script>

  import MessagesList from './MessagesList';
  import MessagesThread from './MessagesThread';

  export default {
    name: 'MessageContainer',
    components: {
      MessagesList,
      MessagesThread,
    },
    props: {
      threads: {
        type: Array,
        required: true,
      },
      currentThread: {
        type: Array,
        required: false,
      },
    },
    computed: {},
  };

</script>


<style lang="stylus" scoped>

  @require '~kolibri.styles.definitions'

  .messages-container
    height: calc(100vh - 220px)

</style>
