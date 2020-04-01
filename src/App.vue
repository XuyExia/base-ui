<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    beforeCreate () {
    /*  for (const key in sessionStorage) {
        // eslint-disable-next-line no-prototype-builtins
        if (sessionStorage.hasOwnProperty(key)) {
          if (!key.startsWith('yuejuan-')) {
            continue
          }
          let d = sessionStorage.getItem(key)
          let str = key.replace('yuejuan-', '')
          try {
            d = JSON.parse(d)
            this.$store.commit(str, d)
            // eslint-disable-next-line no-empty
          } catch (error) {

          }
        }
      }
      if (localStorage.user) {
        this.$store.commit('SET_USER', JSON.parse(localStorage.user))
      }*/
    }
  }
</script>


