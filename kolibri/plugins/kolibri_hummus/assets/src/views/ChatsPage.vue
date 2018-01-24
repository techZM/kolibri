<template>

  <messages-container
    :threads="threads"
    :currentThread="currentThread"
  />

</template>


<script>

  import MessagesContainer from './MessagesContainer';

  export default {
    name: 'ChatsPage',
    components: {
      MessagesContainer,
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
  };

</script>


<style lang="stylus" scoped>

  @require '~kolibri.styles.definitions'

</style>
