<template>

  <div class="messages-thread">
    <div v-if="currentThread">
      No thread selected :(
    </div>
    <template
      v-else
    >
      <div class="messages-thread-header">
        This is the header and stuff
      </div>

      <div class="messages-thread-body">
        bodyy
        <messages-thread-item
          v-for="thread in currentThread"
          :key="thread.id"
        />
      </div>

      <div class="messages-thread-input">
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
      </div>


    </template>

  </div>

</template>


<script>

  import kTextbox from 'kolibri.coreVue.components.kTextbox';
  import kButton from 'kolibri.coreVue.components.kButton';

  export default {
    name: 'MessagesThread',
    components: {
      kTextbox,
      kButton,
    },
    props: {
      currentThread: {
        type: Array,
        required: false,
      },
    },
    data() {
      return {
        message: '',
      };
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
