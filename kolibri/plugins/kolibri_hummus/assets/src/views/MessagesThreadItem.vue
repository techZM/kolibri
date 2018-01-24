<template>

  <div class="messages-thread-item">
    <div v-if="isCurrentUsersMessage">
      {{ senderUsername }}
    </div>
    <div
      class="messages=thread-item-text"
      :class="
        isCurrentUsersMessage ?
          'messages=thread-item-text-other' :
          'messages=thread-item-text-self'
      "
    >
      {{ text }}
    </div>
  </div>

</template>


<script>

  export default {
    name: 'MessagesThreadItem',
    props: {
      text: {
        type: String,
        required:true,
      },
      date: {
        type: String,
        required: false,
      },
      senderUsername: {
        type: String,
        required: true,
      },
      senderFullname: {
        type: String,
        required: true,
      },
      senderId: {
        type: String,
        required: true,
      },
      recipientId: {
        type: String,
        required: true,
      },
    },
    computed: {
      isCurrentUsersMessage() {
        return this.senderId !== this.recipientId;
      }
    },
  };

</script>


<style lang="stylus" scoped>

  @require '~kolibri.styles.definitions'

</style>
