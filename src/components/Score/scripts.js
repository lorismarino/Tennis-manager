export default {
  name: 'Score',

  computed: {
    // Check to start game
    startGame () {
      if (this.$store.state.players) return true
    },

    // Check game playing or finish
    playing () {
      if (!this.$store.state.scores.end) return true
    },

    /*****

     * Get players

     *****/

    player1 () {
      return this.$store.state.players[0]
    },

    player2 () {
      return this.$store.state.players[1]
    },

    // Check if service's for player 1
    player1serve () {
      if (this.$store.state.service === this.$store.state.players[0]) return true
    },

    // Check if service's for player 2
    player2serve () {
      if (this.$store.state.service === this.$store.state.players[1]) return true
    },

    // Check set 2 is happening or has passed
    set2 () {
      if (this.$store.state.scores.set === 2 || this.$store.state.scores.set === 3) return true
    },

    // Check set 3 is happening or has passed
    set3 () {
      if (this.$store.state.scores.set === 3) return true
    },

    /*****

     * Get points

     *****/

    player1Points () {
      return this.$store.state.scores.scores.player1.points
    },

    player2Points () {
      return this.$store.state.scores.scores.player2.points
    },

    /*****

     * Get win games

     *****/

    player1Set1 () {
      return this.$store.state.scores.scores.player1.set1
    },

    player2Set1 () {
      return this.$store.state.scores.scores.player2.set1
    },

    player1Set2 () {
      return this.$store.state.scores.scores.player1.set2
    },

    player2Set2 () {
      return this.$store.state.scores.scores.player2.set2
    },

    player1Set3 () {
      return this.$store.state.scores.scores.player1.set3
    },

    player2Set3 () {
      return this.$store.state.scores.scores.player2.set3
    },

    /*****

     * Check actual set

     *****/
    isSet1 () {
      if (this.$store.state.scores.set === 1) return true
    },

    isSet2 () {
      if (this.$store.state.scores.set === 2) return true
    },
    isSet3 () {
      if (this.$store.state.scores.set === 3) return true
    },

    /*****

     * Check winners of sets

     *****/

    player1WinSet1 () {
      if (this.$store.state.scores.scores.player1.winSet.set1 === true) return true
    },

    player1WinSet2 () {
      if (this.$store.state.scores.scores.player1.winSet.set2 === true) return true
    },

    player1WinSet3 () {
      if (this.$store.state.scores.scores.player1.winSet.set3 === true) return true
    },

    player2WinSet1 () {
      if (this.$store.state.scores.scores.player2.winSet.set1 === true) return true
    },

    player2WinSet2 () {
      if (this.$store.state.scores.scores.player2.winSet.set2 === true) return true
    },

    player2WinSet3 () {
      if (this.$store.state.scores.scores.player2.winSet.set3 === true) return true
    }
  }
}
