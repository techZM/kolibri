<template>

  <div>
    Chats page
  </div>

</template>


<script>

  export default {
    name: 'ChatsPage',
    components: {

    },
    computed: {

    },
    vuex: {
      getters: {
        pageName: state => state.pageName,
      },
    },

  };

</script>


<style lang="stylus" scoped>

  @require '~kolibri.styles.definitions'

</style>
