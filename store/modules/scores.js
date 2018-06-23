export default {

  state: {
    set: 1, // Actual set / number of sets
    game: 0, // Actual game / number of game
    end: false, // Get if the finish game
    tieBreak: false, // Get if the tie break
    pointsTieBreak: 0, // Get the points of tie break
    scores: {

      /*****

       * Player 1

       *****/

      player1: {
        set1: 0, // Game win of set 1
        set2: 0, // Game win of set 2
        set3: 0, // Game win of set 3
        win: 0,
        winSet: {
          set1: false, // Set 1 if win
          set2: false, // Set 2 if win
          set3: false // Set 3 if win
        },
        points: 0 // Points of actual game
      },

      /*****

       * Player 2

       *****/

      player2: {
        set1: 0, // Game win of set 1
        set2: 0, // Game win of set 2
        set3: 0, // Game win of set 3
        win: 0,
        winSet: {
          set1: false, // Set 1 if win
          set2: false, // Set 2 if win
          set3: false // Set 3 if win
        },
        points: 0 // Points of actual game
      }
    }
  },

  mutations: {
    setPoint (state, data) {
      const player = data // Player win points
      const playerOpp = player === 'player1' ? 'player2' : 'player1' // Player opponent

      // Tie break
      if (state.scores[player][`set${state.set}`] === 6 && state.scores[playerOpp][`set${state.set}`] === 6) {
        state.tieBreak = true // Set tiBreak
        state.scores[player].points++ // Add point
        state.pointsTieBreak++ // Add tieBreak point

        // Win tie break
        if (state.scores[player].points > 6 && state.scores[player].points >= state.scores[playerOpp].points + 2) {
          state.scores[player].winSet[`set${state.set}`] = true // Add win set

          if (state.scores[player].win === 0) state.set++ // Add next set
          else state.end = true // Set finish game

          state.scores[player].win++ // Add win set
          state.scores[player].points = 0 // Reset points
          state.scores[playerOpp].points = 0 // Reset points
        }
      } else {
        if (state.tieBreak) state.tieBreak = false // Set no tieBreak
        if (state.scores[data].points === 0) state.scores[player].points = 15
        else if (state.scores[player].points === 15) state.scores[player].points = 30
        else if (state.scores[player].points === 30) state.scores[player].points = 40
        else if (state.scores[player].points === 40) {
          if (state.scores[playerOpp].points === 40) state.scores[player].points = 'Av'
          else if (state.scores[playerOpp].points === 'Av') state.scores[playerOpp].points = 40
          else this.commit('setGame', player) // Player opposite as 40
        } else this.commit('setGame', player) // Player opposite <= 30
      }
    },

    setGame (state, data) {
      const player = data // Player win points
      const playerOpp = player === 'player1' ? 'player2' : 'player1' // Player opponent

      // Win set
      if ((state.scores[playerOpp][`set${state.set}`] < 5 && state.scores[player][`set${state.set}`] === 5) || (state.scores[playerOpp][`set${state.set}`] === 5 && state.scores[player][`set${state.set}`] === 6)) {
        state.scores[player][`set${state.set}`]++ // Add win game in set
        state.scores[player].winSet[`set${state.set}`] = true // Add win set

        if (state.scores[player].win === 0) state.set++ // Add next set
        else state.end = true // Set finish game

        state.scores[player].win++ // Add win
      } else {
        state.scores[player][`set${state.set}`]++ // Add win game in set
        state.game++ // Add game
      }
      state.scores[player].points = 0 // Reset points
      state.scores[playerOpp].points = 0 // Reset points
    }
  }

}
