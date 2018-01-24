<template>

  <immersive-full-screen
    @close="closeModal"
    backPageText="New chat"
    :backPageLink="backPageLink"
  >
    testing
  </immersive-full-screen>

</template>


<script>

  import immersiveFullScreen from 'kolibri.coreVue.components.immersiveFullScreen';
  import { PageNames } from '../../constants';
  import {closeModal } from '../state/actions';

  export default {
    name: 'NewChat',

    components: {
      immersiveFullScreen,
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
      },
    },
  };

</script>


<style lang="stylus"></style>
