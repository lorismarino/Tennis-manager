export default {
  name: 'CreateGame',

  data () {
    return {
      player1: '',
      player2: '',
      createGame: false
    }
  },

  methods: {
    launch () {
      if (this.player1 && this.player2) {
        this.createGame = true
        this.$store.commit('setPlayers', [this.player1, this.player2])
      }
    }
  }
}
