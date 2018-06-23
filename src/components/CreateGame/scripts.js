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
      if (/\w/i.test(this.player1) && /\w/i.test(this.player2) && this.player1 !== this.player2) {
        this.createGame = true
        this.$store.commit('setPlayers', [this.player1, this.player2])
      }
    }
  }
}
