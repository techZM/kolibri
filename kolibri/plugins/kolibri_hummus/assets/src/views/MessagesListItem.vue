<template>

  <div class="messages-list-item">
    <div class="message-list-item-icon">
      <mat-svg
        v-if="isUserIcon"
        category="social"
        name="person"
      />
      <mat-svg
        v-if="isGroupIcon"
        category="social"
        name="group"
      />
      <mat-svg
        v-if="isClassIcon"
        category="social"
        name="domain"
      />
      <mat-svg
        v-if="isAlertIcon"
        category="action"
        name="announcement"
      />
    </div>
    <div class="message-list-item-content">
      <div class="message-list-item-content-heading">
        {{ heading }}
      </div>
      <div class="message-list-item-content-body">
        {{ body }}
      </div>
    </div>
    <div class="message-list-item-notification">

    </div>
  </div>

</template>


<script>

  import MessagesListItem from './MessagesList';
  import { ICON_KINDS } from '../../constants';


  export default {
    name: 'MessagesListItem',
    components: {
      MessagesListItem,
    },
    props: {
      heading: {
        type: String,
        required: true,
      },
      body: {
        type: String,
        required: true,
      },
      kind: {
        type: String,
        required: true,
        validator(val) {
          return ICON_KINDS.hasOwnProperty(val);
        },
      },
    },
    computed: {
      isUserIcon() {
        return this.kind === ICON_KINDS.USER;
      },
      isGroupIcon() {
        return this.kind === ICON_KINDS.GROUP;
      },
      isClassIcon() {
        return this.kind === ICON_KINDS.CLASS;
      },
      isAlertIcon() {
        return this.kind === ICON_KINDS.ALERT;
      },

    },
  };

</script>


<style lang="stylus" scoped>

  @require '~kolibri.styles.definitions'

  .messages-list-item
    background-color: purple
    width: 100%
    height: 100px

</style>
