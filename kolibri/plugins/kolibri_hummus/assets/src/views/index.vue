<template>

  <CoreBase
    :topLevelPageName="topLevelPageName"
    :appBarTitle="$tr('hummus')"
  >
    Hummus
  </CoreBase>

</template>


<script>

  import CoreBase from 'kolibri.coreVue.components.coreBase';
  import { TopLevelPageNames } from 'kolibri.coreVue.vuex.constants';

  export default {
    name: 'HummusRoot',
    $trs: {
      hummus: 'Hummus',
    },
    components: {
      CoreBase,
    },
    computed: {
      topLevelPageName() {
        return TopLevelPageNames.HUMMUS;
      },

    },

  };

</script>


<style lang="stylus" scoped>

  @require '~kolibri.styles.definitions'

</style>
