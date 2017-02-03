<template>
  <div
    class="playable-card"
    v-show="!played"
    v-on:dblclick="sendCard">
    <img v-bind:src="card.image"></img>
  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
import { mapGetters, mapActions } from 'vuex'
// import HelloChild from './HelloChild'

export default {
  name: 'playable-card',
  props: ['card', 'playerID'],
  data () {
    return {
      played: false
    }
  },
  computed: {
    ...mapGetters(['titleState'])
  },
  methods: {
    ...mapActions(['postPlayedCard']),
    sendCard () {
      let payload = {
        'playerID': this.playerID,
        'card': this.card
      }
      this.postPlayedCard(payload)
      this.played = true
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

img {
  max-height: 125px;
}

</style>
