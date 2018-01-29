<template>

  <router-link :to="threadLink">
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
        <h3 class="message-list-item-content-heading">
          {{ heading }}
        </h3>
        <div class="message-list-item-content-body">
          {{ body }}
        </div>
      </div>
      <div class="message-list-item-notification">

      </div>
    </div>
  </router-link>

</template>


<script>

  import MessagesListItem from './MessagesList';
  import { ICON_KINDS, PageNames } from '../../constants';

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
      id: {
        type: String,
        required: true,
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
      threadLink() {
        if (this.kind === ICON_KINDS.ALERT) {
          return {
            name: PageNames.ALERTS_OPEN,
            params: {
              alertId: this.id,
            }
          };
        }
        return {
          name: PageNames.CHATS_OPEN,
          params: {
            chatId: this.id,
          },
        };
      },
    },
  };

</script>


<style lang="stylus" scoped>

  @require '~kolibri.styles.definitions'

  .messages-list-item
    border-bottom: solid 1px
    width: 100%
    height: 100px

</style>
