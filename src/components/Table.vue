<template>
  <div class="table-component">
    <p>Card Table</p>
    <div class="layout-container">

      <div class="first-third">Team 1</div>

      <div class="second-third">
        <div class="table-container">
          <div class="player3">3</div>
          <div class="sub-container">
            <div class="player2">2</div>
            <div class="center-spacer"></div>
            <div class="player4">Player 4<img id="card" src="https://s3-us-west-2.amazonaws.com/strebor-spades-images/AS.svg"></img></div>
          </div>
          <div class="player1">1</div>
        </div>
      </div>

      <div class="third-third"> Team 2</div>

    </div>
    <button>New Hand</button>
    <button>Undo</button>
    <button>Tally</button>
    <button>Reset</button>
    <button v-on:click="goHome">Home</button>

    <hr>
    <counter></counter>
    <hr>

    <div
      class="card-pics"
      v-for="(cardObject, index) in fullDeck">
      <single-card v-bind:card="cardObject"></single-card>
    </div>

  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
import { mapGetters, mapActions } from 'vuex'
import SingleCard from './SingleCard.vue'
import Counter from './Counter.vue'

export default {
  name: 'table-component',
  props: ['propsIn'],
  data () {
    return {
      propsOut: {

      }
    }
  },
  computed: {
    ...mapGetters(['fullDeck'])
  },
  methods: {
    ...mapActions(['setTitle']),
    goHome () {
      // Demo of programitic navigation
      this.$router.push('/')
    }
  },
  filters: {

  },
  components: {
    Counter,
    SingleCard
  }
}
</script>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<style scoped>

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
