import CreateGame from '@/components/CreateGame'

export default {
  name: 'Home',

  components: {
    CreateGame
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
      if (this.player1 && this.player2) {
        this.createGame = true
      }
    }
  }
}
