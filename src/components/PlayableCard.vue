<template>
  <transition name="slide-fade">
  <div
    class="playable-card"
    v-on:click="sendCard">
    <img v-bind:src="card.image"></img>
  </div>
  </transition>
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

    }
  },
  computed: {
    ...mapGetters(['titleState'])
  },
  methods: {
    ...mapActions([
      'putPlayedCard',
      'modifyPlayer1Hand',
      'modifyPlayer2Hand',
      'modifyPlayer3Hand',
      'modifyPlayer4Hand'
    ]),
    sendCard () {
      let payload = {
        'playerID': this.playerID,
        'card': this.card
      }
      this.putPlayedCard(payload)
      switch (this.playerID.toString()) {
        case '1':
          this.modifyPlayer1Hand(this.card)
          break
        case '2':
          this.modifyPlayer2Hand(this.card)
          break
        case '3':
          this.modifyPlayer3Hand(this.card)
          break
        case '4':
          this.modifyPlayer4Hand(this.card)
          break
      }
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

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
{
  transform: translateY(-30px);
  opacity: 0;
}

</style>
