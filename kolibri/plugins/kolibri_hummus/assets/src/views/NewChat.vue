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
      <k-textbox
        label="Group chat name"
        v-model="groupName"
      />
      <k-button
        text="Finish"
        :primary="true"
        @click="createThread(groupName, selectedUsers)"
      />
      <table>
        <thead>
          <tr>
            <th></th>
            <th>name</th>
            <th>username</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="user in facilityUsers"
            :key="user.id"
          >
            <td>
              <k-checkbox
                label="Select user"
                :showLabel="false"
                :checked="isSelected(user.id)"
                @change="toggleSelection(user.id)"
              />
            </td>
            <td>{{ user.full_name }}</td>
            <td>{{ user.username }}</td>
          </tr>
        </tbody>
      </table>
    </template>

  </immersive-full-screen>

</template>


<script>

  import immersiveFullScreen from 'kolibri.coreVue.components.immersiveFullScreen';
  import kButton from 'kolibri.coreVue.components.kButton';
  import kCheckbox from 'kolibri.coreVue.components.kCheckbox';
    import kTextbox from 'kolibri.coreVue.components.kTextbox';
  import { PageNames, NEW_CHAT_MODAL_STEPS } from '../../constants';
  import { closeModal, createThread, openNewGroupChat } from '../state/actions';

  export default {
  name: 'NewChat',

  components: {
    immersiveFullScreen,
    kButton,
    kCheckbox,
    kTextbox,
  },
  data() {
    return { selectedUsers: [], groupName: '', };
  },
  computed: {
    backPageLink() {
      return {
        name: PageNames.CHATS,
      };
    },
    isInDirectStep() {
      return this.modalStep === NEW_CHAT_MODAL_STEPS.DIRECT;
    },
  },
  methods: {
    isSelected(userId) {
      return this.selectedUsers.includes(userId);
    },
    toggleSelection(userId) {
      const index = this.selectedUsers.indexOf(userId);
      if (index === -1) {
        this.selectedUsers.push(userId);
      } else {
        this.selectedUsers.splice(index, 1);
      }
    },
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
