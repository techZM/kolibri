<template>

  <immersive-full-screen
    @close="closeModal"
    backPageText="New chat"
    :backPageLink="backPageLink"
  >
    <h2>Group message</h2>
    <k-button
      text="Create group"
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


  </immersive-full-screen>

</template>


<script>

  import immersiveFullScreen from 'kolibri.coreVue.components.immersiveFullScreen';
  import kButton from 'kolibri.coreVue.components.kButton'
  import { PageNames } from '../../constants';
  import {closeModal, createThread} from '../state/actions';

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
    },
    vuex: {
      actions: {
        closeModal,
        createThread,
      },
      getters: {
        facilityUsers: state => state.pageState.facilityUsers,
      },
    },
  };

</script>


<style lang="stylus"></style>
