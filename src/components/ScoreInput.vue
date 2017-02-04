<template>
  <div class="score-input-component">

    <div class="flex-container">
      <div class="flex1"></div>

      <div class="flex2">
        <input type="text" v-show="!alreadyBid2" v-model="localBid" placeholder="Bid" size="10">
      </div>

      <div class="flex3"></div>

      <div class="flex4">
        <input type="text" v-show="alreadyBid2" v-model="localScore" placeholder="Score" size="10">
      </div>

      <div class="flex5"></div>
    </div>

    <button v-if="alreadyBid2"v-on:click="handleScore">Score It!</button>
    <button v-else-if="alreadyBid1" v-on:click="handleFinalBid">Confirm Bid</button>
    <button v-else v-on:click="handlePrelimBid">Prelim Bid</button>

  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
import { mapActions } from 'vuex'
// import HelloChild from './HelloChild'

export default {
  name: 'score-input-component',
  props: ['team'],
  data () {
    return {
      localBid: '',
      localScore: '',
      alreadyBid1: false,
      alreadyBid2: false
    }
  },
  computed: {
    // ...mapGetters(['titleState'])
  },
  methods: {
    ...mapActions(['postPrelimBid', 'postFinalBid', 'postScore']),
    handlePrelimBid () {
      let payload = {
        'team': this.team,
        'localBid': this.localBid
      }
      this.postPrelimBid(payload)
      this.alreadyBid1 = true
    },
    handleFinalBid () {
      let payload = {
        'team': this.team,
        'localBid': this.localBid
      }
      this.postFinalBid(payload)
      this.alreadyBid2 = true
    },
    handleScore () {
      let payload = {
        'team': this.team,
        'localScore': this.localScore
      }
      this.postScore(payload)
      this.alreadyBid1 = false
      this.alreadyBid2 = false
      this.localBid = ''
      this.localScore = ''
    }
  },
  filters: {

  },
  components: {
    // HelloChild
  }
}
</script>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<style scoped>

.flex-container {
  display: flex;
}

.flex1 {
  flex: 2 1 auto;
}

.flex2 {
  flex: 1 1 0;
}

.flex3 {
  flex: 1 1 auto;
}

.flex4 {
  flex: 1 1 0;
}

.flex5 {
  flex: 2 1 auto;
}

button {
  background-color: white;
  color: #2c3e50;
  border: 1px solid #4CAF50;
  padding: 4px 6px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: .75em;
  font-weight: 500;
  margin: 8px 2px;
  -webkit-transition-duration: 0.2s; /* Safari */
  transition-duration: 0.2s;
  cursor: pointer;
}

button:hover {
  background-color: #4CAF50;
  color: white;
}

</style>
