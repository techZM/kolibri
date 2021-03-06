<template>

  <CoreBase
    :immersivePage="false"
    :authorized="userIsAuthorized"
    authorizedRole="adminOrCoach"
    :showSubNav="true"
  >
    <TopNavbar slot="sub-nav" />

    <KPageContainer>
      <PlanHeader />
      <div class="ta-r">
        <KButton
          class="new-group-button"
          :text="$tr('newGroup')"
          :primary="true"
          @click="openCreateGroupModal"
        />
      </div>

      <CoreTable>
        <thead slot="thead">
          <tr>
            <th>
              {{ coachStrings.$tr('nameLabel') }}
            </th>
            <th>
              {{ coachStrings.$tr('learnersLabel') }}
            </th>
            <th></th>
          </tr>

        </thead>
        <tbody slot="tbody">
          <GroupRowTr
            v-for="group in sortedGroups"
            :key="group.id"
            :group="group"
            @rename="openRenameGroupModal"
            @delete="openDeleteGroupModal"
            @subscribe="openSubscribeGroupModal"
          />
        </tbody>
      </CoreTable>

      <p v-if="!sortedGroups.length">
        {{ $tr('noGroups') }}
      </p>

      <CreateGroupModal
        v-if="showCreateGroupModal"
        :groups="sortedGroups"
        @success="handleSuccessCreateGroup"
      />

      <RenameGroupModal
        v-if="showRenameGroupModal"
        :groupName="selectedGroup.name"
        :groupId="selectedGroup.id"
        :groups="sortedGroups"
      />

      <DeleteGroupModal
        v-if="showDeleteGroupModal"
        :groupName="selectedGroup.name"
        :groupId="selectedGroup.id"
        @success="handleSuccessDeleteGroup"
      />

      <SubscribeGroupModal
        v-if="showSubscriptionGroupModal"
        :groupName="selectedGroup.name"
        :groupId="selectedGroup.id"
        :classId="thisClassId.join('')"
      />

    </KPageContainer>
  </CoreBase>

</template>


<script>

  import { mapState, mapActions } from 'vuex';
  import orderBy from 'lodash/orderBy';
  import KButton from 'kolibri.coreVue.components.KButton';
  import CoreTable from 'kolibri.coreVue.components.CoreTable';
  import commonCoach from '../../common';
  import PlanHeader from '../../plan/PlanHeader';
  import { GroupModals } from '../../../constants';
  import { groupMgmtStrings } from '../../common/groupManagement/groupManagementStrings';
  import CreateGroupModal from './CreateGroupModal';
  import GroupRowTr from './GroupRow';
  import RenameGroupModal from './RenameGroupModal';
  import DeleteGroupModal from './DeleteGroupModal';
  import SubscribeGroupModal from './SubscribeGroupModal';

  export default {
    name: 'GroupsPage',
    $trs: {
      classGroups: 'Groups',
      newGroup: 'New group',
      noGroups: 'You do not have any groups',
      documentTitle: 'Groups',
    },
    components: {
      CoreTable,
      PlanHeader,
      KButton,
      GroupRowTr,
      CreateGroupModal,
      RenameGroupModal,
      DeleteGroupModal,
      SubscribeGroupModal,
    },
    mixins: [commonCoach],
    data() {
      return {
        selectedGroup: {
          name: '',
          id: '',
        },
      };
    },
    computed: {
      ...mapState('groups', ['groupModalShown', 'groups']),
      ...mapState('subscriptions', [
        'subscriptionModalShown',
        'selectedSubscriptions',
        'selectedGroupSubscriptions',
      ]),
      showCreateGroupModal() {
        return this.groupModalShown === GroupModals.CREATE_GROUP;
      },
      showRenameGroupModal() {
        return this.groupModalShown === GroupModals.RENAME_GROUP;
      },
      showDeleteGroupModal() {
        return this.groupModalShown === GroupModals.DELETE_GROUP;
      },
      showSubscriptionGroupModal() {
        return this.groupModalShown === GroupModals.CHOOSE_GROUP_SUBSCRIPTIONS;
      },
      sortedGroups() {
        return orderBy(this.groups, [group => group.name.toUpperCase()], ['asc']);
      },
      thisClassId() {
        return this.getClassId;
      },
    },
    methods: {
      ...mapActions('groups', ['displayModal']),

      ...mapActions(['createSnackbar']),
      openCreateGroupModal() {
        this.displayModal(GroupModals.CREATE_GROUP);
      },
      openSubscribeGroupModal(groupName, groupId) {
        this.selectedGroup = {
          name: groupName,
          id: groupId,
        };
        this.displayModal(GroupModals.CHOOSE_GROUP_SUBSCRIPTIONS);
      },
      openRenameGroupModal(groupName, groupId) {
        this.selectedGroup = {
          name: groupName,
          id: groupId,
        };
        this.displayModal(GroupModals.RENAME_GROUP);
      },
      openDeleteGroupModal(groupName, groupId) {
        this.selectedGroup = {
          name: groupName,
          id: groupId,
        };
        this.displayModal(GroupModals.DELETE_GROUP);
      },
      handleSuccessCreateGroup() {
        this.createSnackbar({
          text: groupMgmtStrings.$tr('groupCreatedNotice'),
          autoDismiss: true,
        });
        this.displayModal(false);
      },
      handleSuccessDeleteGroup() {
        this.createSnackbar({
          text: groupMgmtStrings.$tr('groupDeletedNotice'),
          autoDismiss: true,
        });
        this.displayModal(false);
      },
    },
  };

</script>


<style lang="scss" scoped>

  .ta-r {
    text-align: right;
  }

</style>
