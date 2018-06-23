import CreateGame from '@/components/CreateGame'
import Board from '@/components/Board'
import Score from '@/components/Score'

export default {
  name: 'Home',

  components: {
    CreateGame,
    Board,
    Score
  },

  data () {
    return {
      player1: '',
      player2: '',
      createGame: false
    }
  },

  methods: {
    launch () {
      if (this.player1 && this.player2) this.createGame = true
    }
  }
}
