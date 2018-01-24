<template>

  <immersive-full-screen
    @close="closeModal"
    backPageText="New chat"
    :backPageLink="backPageLink"
  >
    <template v-if="isInDirectStep">
      <h2>Group message</h2>
      <k-button
        text="Create group"
        @click="openNewGroupChat"
      />
      <h2>Direct message</h2>

      <table>
        <thead>
          <tr>
            <th>Full name</th>
            <th>username</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="user in facilityUsers"
            :key="user.id"
            @click="createThread(user.full_name, [user.id])"
          >
            <td>{{ user.full_name }}</td>
            <td>{{ user.username }}</td>
          </tr>
        </tbody>
      </table>
    </template>
    <template v-else>

    </template>



  </immersive-full-screen>

</template>


<script>

  import immersiveFullScreen from 'kolibri.coreVue.components.immersiveFullScreen';
  import kButton from 'kolibri.coreVue.components.kButton'
  import { PageNames, NEW_CHAT_MODAL_STEPS } from '../../constants';
  import {closeModal, createThread, openNewGroupChat } from '../state/actions';

  export default {
    name: 'NewChat',

    components: {
      immersiveFullScreen,
      kButton,
    },
    props: {},
    computed: {
      backPageLink() {
        return {
          name: PageNames.CHATS,
        };
      },
      isInDirectStep() {
        return this.modalStep === NEW_CHAT_MODAL_STEPS.DIRECT;
      }
    },
    vuex: {
      actions: {
        closeModal,
        createThread,
        openNewGroupChat,
      },
      getters: {
        facilityUsers: state => state.pageState.facilityUsers,
        modalStep: state => state.pageState.modalStep,
      },
    },
  };

</script>


<style lang="stylus" scoped>

  tr
    cursor: pointer
    &:hover
      background-color: #eeeeee
  td
    padding: 2em


</style>
