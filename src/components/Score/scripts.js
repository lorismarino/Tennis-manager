export default {
  name: 'Score',
  data () {
    return {
    }
  },

  computed: {
    startGame () {
      if (this.$store.state.players) {
        return true
      }
      return false
    }
  }
}
