<template>
  <div class="player1-component">
    <!-- Display ordered cards in player's hand -->

    <div
      class="card-pics"
      v-for="(cardObject, index) in orderedCards">
      <playable-card
        v-bind:card="cardObject"
        v-bind:playerID="1">
      </playable-card>
    </div>

  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
import _ from 'lodash'
import { mapGetters, mapActions } from 'vuex'
import PlayableCard from './PlayableCard.vue'

export default {
  name: 'player1-component',
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['player1Hand']),
    orderedCards () {
      let spades = _.orderBy(_.filter(this.player1Hand, ['suit', 'Spades']), ['rank'], ['asc'])
      let diamonds = _.orderBy(_.filter(this.player1Hand, ['suit', 'Diamonds']), ['rank'], ['asc'])
      let clubs = _.orderBy(_.filter(this.player1Hand, ['suit', 'Clubs']), ['rank'], ['asc'])
      let hearts = _.orderBy(_.filter(this.player1Hand, ['suit', 'Hearts']), ['rank'], ['asc'])

      // When we're lacking one suite, keep colors alternating so it's easier to see cards
      if (diamonds.length === 0) {
        return spades.concat(hearts, clubs)
      }
      if (hearts.length === 0) {
        return spades.concat(diamonds, clubs)
      }
      if (clubs.length === 0) {
        return diamonds.concat(spades, hearts)
      }
      return spades.concat(diamonds, clubs, hearts)
    }
  },
  methods: {
    ...mapActions(['populatePlayer1Hand'])
  },
  components: {
    PlayableCard
  },
  mounted () {
    this.populatePlayer1Hand()
  }
}
</script>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<style scoped>

.card-pics {
  display: inline-block;
}

</style>
