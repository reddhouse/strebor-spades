<template>
  <div class="table-component">
    <div class="title">Strebor St. Spades</div>
    <p>Trumpet Case Table</p>
    <div class="layout-container">

      <!-- Team 1 Scoring -->
      <div class="first-third">
        <div class="score-header">Team 1</div>
        <div v-for="(allScores, index) in teamScores[0].scores">
          <score-display v-bind:scoreList="allScores"></score-display>
        </div>
        <score-input v-bind:team="1"></score-input>
      </div>

      <!-- Card Table, Center Section -->
      <div class="second-third">
        <div class="table-container">
          <div class="player3">3</div>
          <div class="sub-container">
            <div class="player2">2</div>
            <div class="center-spacer"></div>
            <div class="player4">Player 4<img id="card" src="https://s3-us-west-2.amazonaws.com/strebor-spades-images/AS.svg"></img></div>
          </div>
          <div
            class="player1"
            v-if="tableHand.length > 0">
            Player 1
            <single-card v-bind:card="tableHand[0].card"></single-card>
          </div>
          <div
            class="player1"
            v-else>
            Player 1
          </div>

        </div>
      </div>

      <!-- Team 2 Scoring -->
      <div class="third-third">
        <div class="score-header">Team 2</div>
        <div v-for="(allScores, index) in teamScores[1].scores">
          <score-display v-bind:scoreList="allScores"></score-display>
        </div>
        <score-input v-bind:team="2"></score-input>
      </div>

    <!-- Navigation  -->
    </div>
    <button v-on:click="onDeal">Deal</button>
    <button>Undo</button>
    <button>Tally</button>
    <button>Reset</button>
    <button v-on:click="goHome">Home</button>
    <hr>

    <!-- View All Hands, Development Only -->
    <p>player1Hand</p>
    <div
      class="card-pics"
      v-for="(cardObject, index) in player1Hand">
      <single-card v-bind:card="cardObject"></single-card>
    </div>
    <hr>

    <p>player2Hand</p>
    <div
      class="card-pics"
      v-for="(cardObject, index) in player2Hand">
      <single-card v-bind:card="cardObject"></single-card>
    </div>
    <hr>

    <p>player3Hand</p>
    <div
      class="card-pics"
      v-for="(cardObject, index) in player3Hand">
      <single-card v-bind:card="cardObject"></single-card>
    </div>
    <hr>

    <p>player4Hand</p>
    <div
      class="card-pics"
      v-for="(cardObject, index) in player4Hand">
      <single-card v-bind:card="cardObject"></single-card>
    </div>
    <hr>

    <p>shuffled</p>
    <div
      class="card-pics"
      v-for="(cardObject, index) in shuffled">
      <single-card v-bind:card="cardObject"></single-card>
    </div>
    <hr>

    <p>newDeck</p>
    <div
      class="card-pics"
      v-for="(cardObject, index) in newDeck">
      <single-card v-bind:card="cardObject"></single-card>
    </div>

  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
import _ from 'lodash'
import { mapGetters, mapActions } from 'vuex'
import SingleCard from './SingleCard.vue'
import ScoreDisplay from './ScoreDisplay.vue'
import ScoreInput from './ScoreInput.vue'

export default {
  name: 'table-component',
  props: ['propsIn'],
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'newDeck',
      'shuffled',
      'player1Hand',
      'player2Hand',
      'player3Hand',
      'player4Hand',
      'tableHand',
      'teamScores'
    ])
  },
  methods: {
    ...mapActions([
      'putShuffledDeck',
      'putPlayer1Hand',
      'putPlayer2Hand',
      'putPlayer3Hand',
      'putPlayer4Hand'
    ]),
    goHome () {
      // Demo of programitic navigation
      this.$router.push('/')
    },
    onDeal () {
      this.putShuffledDeck()
    }
  },
  watch: {
    shuffled: function () {
      // Deal 13 cards to each player, call actions to write to db
      let splitDeck = _.chunk(this.shuffled, 13)
      this.putPlayer1Hand(splitDeck[0])
      setTimeout(() => { this.putPlayer2Hand(splitDeck[1]) }, 250)
      setTimeout(() => { this.putPlayer3Hand(splitDeck[2]) }, 500)
      setTimeout(() => { this.putPlayer4Hand(splitDeck[3]) }, 750)
    }
  },
  components: {
    SingleCard,
    ScoreDisplay,
    ScoreInput
  }
}
</script>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<style scoped>

.score-header {
  font-weight: 500;
}

.title
{
  font-weight: 400;
  font-size: 1.5em;
  margin-bottom: 10px;
}

#card {
  max-height: 125px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.card-pics {
  display: inline-block;
}

.layout-container {
  display: flex;
}

.first-third {
  flex: 1 1 0;
}

.second-third {
  flex: 2 1 0;
}

.third-third {
  flex: 1 1 0;
}

.table-container {
  max-width: 600px;
  margin: auto;
}

.player1 {
  border: 1px solid red;
  height: 175px;
}

.sub-container {
  width: 100%;
  display: flex;
}

.player2 {
  border: 1px solid red;
  flex: 2 1 0;
  height: 175px;
}

.center-spacer {
  flex: 1 1 0;
}

.player4 {
  border: 1px solid red;
  flex: 2 1 0;
  height: 175px;
  position: relative;
}

.player3 {
  border: 1px solid red;
  height: 175px;
}

button {
  background-color: white;
  color: #2c3e50;
  border: 1px solid #4CAF50;
  padding: 8px 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1em;
  font-weight: 500;
  margin: 20px 2px;
  -webkit-transition-duration: 0.2s; /* Safari */
  transition-duration: 0.2s;
  cursor: pointer;
}

button:hover {
  background-color: #4CAF50;
  color: white;
}

</style>
