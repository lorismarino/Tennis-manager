export default {
  name: 'Board',

  data () {
    return {
      set: 1,
      winner: ''
    }
  },

  methods: {
    /*****

     * Add points

     *****/

    addPointPlayer1 () {
      if (this.$store.state.scores.scores.player1.win < 2 || this.$store.state.scores.scores.player1.win < 2) this.$store.commit('setPoint', 'player1')
    },

    addPointPlayer2 () {
      if (this.$store.state.scores.scores.player1.win < 2 || this.$store.state.scores.scores.player1.win < 2) this.$store.commit('setPoint', 'player2')
    }
  },

  computed: {
    // Check to start game
    startGame () {
      if (this.$store.state.players) return true
    },

    // Check game playing or finish
    playing () {
      if (!this.$store.state.scores.end) return true
    },

    // Get players
    player1 () {
      return this.$store.state.players[0]
    },

    player2 () {
      return this.$store.state.players[1]
    },

    // Get player serve
    service () {
      // If first set, define service random
      if (this.$store.state.scores.scores.player1.set1 === 0 && this.$store.state.scores.scores.player2.set1 === 0) {
        const generateServe = Math.floor(Math.random() * Math.floor(2))
        this.$store.commit('setService', this.$store.state.players[generateServe])
      }
      return this.$store.state.service
    },

    // Get actual game
    game () {
      return this.$store.state.scores.game
    },

    // Get actual set
    getSet () {
      return this.$store.state.scores.set
    },

    // Get points tiebreak
    pointsTieBreak () {
      return this.$store.state.scores.pointsTieBreak
    }
  },

  watch: {
    game () {
      // If next set, redefine service random
      if (this.getSet > this.set) {
        this.set++
        const generateServe = Math.floor(Math.random() * Math.floor(2))
        this.$store.commit('setService', this.$store.state.players[generateServe])
      } else {
        if (this.$store.state.service === this.$store.state.players[0]) this.$store.commit('setService', this.$store.state.players[1])
        else if (this.$store.state.service === this.$store.state.players[1]) this.$store.commit('setService', this.$store.state.players[0])
      }
    },

    pointsTieBreak () {
      // If tiebreak, change service each 2 points
      if (this.pointsTieBreak % 2 === 0) {
        if (this.$store.state.service === this.$store.state.players[0]) this.$store.commit('setService', this.$store.state.players[1])
        else if (this.$store.state.service === this.$store.state.players[1]) this.$store.commit('setService', this.$store.state.players[0])
      }
    },

    playing () {
      // If game finish, remove service and add winner of game
      if (!this.playing) {
        this.$store.commit('setService', '')
        const winner = this.$store.state.scores.scores.player1.win === 2 ? this.$store.state.players[0] : this.$store.state.players[1]
        this.winner = winner
      }
    }
  }
}
