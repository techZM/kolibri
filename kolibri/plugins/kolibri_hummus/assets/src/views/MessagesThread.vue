<template>

  <div class="messages-thread">
    <div v-if="!currentThread">
      No thread selected :(
    </div>
    <messages-thread-item
      v-for="thread in currentThread"
      :key="thread.id"
    />
  </div>

</template>


<script>

  export default {
    name: 'MessagesThread',
    props: {
      currentThread: {
        type: Array,
        required: false,
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

</style>
